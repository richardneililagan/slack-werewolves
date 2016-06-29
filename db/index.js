const mongoose = require('mongoose')
const config = require('../config')

// :: replace mongoose promise library with our native Promise implementation
mongoose.Promise = global.Promise

console.log(`Attempting connection to database [${ config.database_url }]...`)
mongoose.connect(config.database_url, {
  user: config.database_username,
  pass: config.database_password
})

// :: lifecycle stuff
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', _ => {
  console.log(`Connection to database [${ config.database_url }] established.`)
})

export default mongoose
