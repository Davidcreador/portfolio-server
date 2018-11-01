require('dotenv').config()
require('ignore-styles')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const serverless = require('serverless-http')

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

// routes
const router = express.Router()
const index = require('../routes/index')
const api = require('../routes/api')

const app = express()

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/.netlify/functions/server', router)

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

app.use('/api', api)

module.exports = app
module.exports.handler = serverless(app)
