require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./config/db.config')

const app = express()


app.use(cors())
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN //
  })
);

db()

app.use('/api', require('./routes/cohort.routes'))


// configurando o express para servir a partir da pasta public
const publicPath = __dirname + '/public';

app.use(express.static(path.join(publicPath)));
app.get('*', (req, res, next) => {
  const hostUrl = req.originalUrl;
  if (!hostUrl.includes('/api')){
    return res.sendFile(path.join(publicPath, 'index.html'))
  }
  return next()
})


app.use((req, res, next)=> {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT}`))