const mongoose = require('../db')

const schema = mongoose.Schema({
  name: String,
  slack_id: String,
  slack_token: String
})

export default mongoose.model('User', schema)
