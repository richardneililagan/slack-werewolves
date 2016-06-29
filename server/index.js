const koa = require('koa')
const app = koa()

const config = require('../config')

require('./routes.js').init(app)

console.log(`Attempting server start on port ${ config.port } ...`)
app.listen(config.port)
console.log(`App listening on port ${ config.port }.`)

export default app
