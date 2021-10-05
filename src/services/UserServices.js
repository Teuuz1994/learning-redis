const connection = require('../database/connection');
const HashProvider = require('../Providers/HashProvider')

class UserService {
  static async create({ name, email, password }) {
    await connection('users').insert({
      name,
      email,
      password: await HashProvider.PasswordHash(password),
    })
  }

  static async findAll() {
    const users = await connection('users').select('*');
    return users;
  }

  static async findById(id) {
    const user = await connection('users').where('id', '=', id)
    return user;
  }
}

module.exports = UserService