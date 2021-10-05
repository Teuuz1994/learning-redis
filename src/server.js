const express = require('express');

const route = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;
  }

  config() {
    this.app.use(express.json());
    this.app.use(route);
  }

  init() {
    this.config();
    this.app.listen(this.port, () => console.info('[INFO] Server is running...'));
  }
}

module.exports = Server;