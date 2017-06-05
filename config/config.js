'use strict'

const config = {
  sessionSecret: 'belleza',

  development: {
    PORT: 3000,
    MONGODB_URI: 'mongodb://localhost:27017/GeoDB'
  },
  production: {
    PORT: 3001,
    MONGODB_URI: 'mongodb://userDB:user@localhost/nameDB'
  }
}

module.exports = config;