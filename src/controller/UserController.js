const UserService = require('../services/UserServices');
const CacheProvider = require('../Providers/CacheProvider');

class UserController {
  async index(request, response) {
    try {
      const usersCached = await CacheProvider.recover('users');

      if (usersCached) {
        return response.status(200).json(usersCached);
      }

      const users = await UserService.findAll();
      await CacheProvider.store('users', users);
      return response.status(200).json(users);
    } catch (error) {
      console.log(error)
    }
  }

  async create(request, response) {
    try {
      const { name, email, password } = request.body;
      await UserService.create({
        name,
        email,
        password,
      })
      await CacheProvider.deleteByKey('users');
      return response.status(201).json({
        message: 'User register success!'
      })
    } catch (error) {

    }
  }

  async findOne(request, response) {
    try {
      const { id } = request.params;
      const user = await UserService.findById(id);
      return response.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;