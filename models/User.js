const {schema, model, Schema} = require('mongoose')

const UserSchema = new Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  passwordHash: {type: String, required: true},
  course: {type: String, enum: ['WDFT', 'WDPT', 'WDPTR', 'DAFT', 'DAPT', 'UXUIFT', 'UXUIPT']},
  campus: {type: String, enum: ['Paris', 'Amsterdam', 'São Paulo', 'Mexico City', 'Madrid', 'Barcelona', 'Lisbon', 'Berlim', 'Miami']},
})