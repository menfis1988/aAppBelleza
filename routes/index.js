'use strict'

const express = require('express')
const api = express.Router()
const index = require('../services/indexController');

api.get('/', index.render);


module.exports = api