require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./config/db.config')

const app = express()


app.use(cors())
app.use(express.json())

db()

app.use('/api', require('./routes/cohort.routes'))


app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT}`))