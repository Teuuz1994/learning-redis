const { hash } = require('bcrypt');

class HashProvider {
  static async PasswordHash(password) {
    const hashedPassword = await hash(password, 8);
    return hashedPassword;
  }
}

module.exports = HashProvider