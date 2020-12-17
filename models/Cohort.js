const {Schema, model} = require('mongoose')

const CohortSchema = new Schema(
  {
    course: {type: String, enum: ['WDFT', 'WDPT', 'WDPTR', 'DAFT', 'DAPT', 'UXUIFT', 'UXUIPT']},
    startMonth: {type: String, enum: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']},
    startYear: Number,
    campus: {type: String, enum: ['Paris', 'Amsterdam', 'São Paulo', 'Mexico City', 'Madrid', 'Barcelona', 'Lisbon', 'Berlim', 'Miami']},
    students: [String]
  }
)

module.exports = model('Cohort', CohortSchema)