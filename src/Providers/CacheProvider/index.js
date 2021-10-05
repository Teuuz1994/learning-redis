const Redis = require('ioredis');

const redisConfig = require('../../config/redisClient')

class CacheProvider {
  static async store(key, value) {
    const client = new Redis(redisConfig.host, redisConfig.host);
    await client.set(key, JSON.stringify(value));
  }

  static async removeAllByPattern(pattern) {
    const client = new Redis(redisConfig.host, redisConfig.host);
    const keys = await client.keys(pattern);
    const pipeline = client.pipeline();
    keys.forEach(key => {
      pipeline.del(key);
    });
  }

  static async deleteByKey(key) {
    const client = new Redis(redisConfig.host, redisConfig.host);
    await client.del(key);
  }

  static async recover(key) {
    const client = new Redis(redisConfig.host, redisConfig.host);
    const data = await client.get(key);
    return JSON.parse(data);
  }
}

module.exports = CacheProvider;