const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()

app.use(cors())

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://Roman:${process.env.MONGO_DB_KEY}@cluster0-vogsm.mongodb.net/travel?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, function () {
      console.log(`Server: http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log('Serwer error', e.message)
    process.exit(1)
  }
}

start()