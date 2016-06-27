const mongoose = require('../db')

const schema = mongoose.Schema({
  name: String
})

export default mongoose.model('Game', schema)
