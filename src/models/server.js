const express = require('express');
const cors = require('cors');

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT;
    this.baseUrl = '/api/v1';
    this.usersPath = 'users';

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  middlewares () {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes () {
    this.app.use(`${this.baseUrl}/${this.usersPath}`, require('../routes/user'));
  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`Server listen on ${this.port}`);
    });
  }
}

module.exports = Server;
