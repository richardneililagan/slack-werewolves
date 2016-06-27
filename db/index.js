const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.database_url)

// :: lifecycle stuff
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', _ => {
  console.log(`Connection to database [${ config.database_url }] established.`)
})

export default mongoose
