'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, match: [/.+\@.+\..+/, "Por favor escribe una dirección de email correcta"]},
  username: { type: String, unique: true, required: 'Nombre de usuario es obligatorio', trim: true },
  provider: { type: String },
  providerId: String,
  providerData: { picture: { type: String }},
  created: { type: Date, default: Date.now }
});

mongoose.model('User', USerSchema);