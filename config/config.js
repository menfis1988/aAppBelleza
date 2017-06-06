'use strict'

const config = {
  sessionSecret: 'belleza',

  development: {
    PORT: 3000,
    MONGODB_URI: 'mongodb://localhost:27017/BellezaDB'
  },
  production: {
    PORT: 3001,
    MONGODB_URI: 'mongodb://userDB:user@localhost/nameDB'
  },
  facebook: {
    clientID: '1680788428884453',
    clientSecret: '551798cc20dbcfbe76ed8b85e5919d50',
    callbackURL: '/auth/facebook/callback'
  }
}

module.exports = config;