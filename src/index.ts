const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
import bodyParser from  'body-parser'
const dotenv = require('dotenv')
const cors = require('cors')
const graphQlSchema = require('./graphql/schema')
const graphQlResolvers = require('./graphql/resolvers')
const isAuth = require('./middlewares/is-auth')
const { graphqlUploadExpress } = require('graphql-upload')

const app = express()
dotenv.config()

app.use(cors())
app.use(isAuth)
app.use('/graphql',
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true,
}))

app.use(bodyParser.json())
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