const koa = require('koa')
const app = koa()

const config = require('../config')

require('./routes.js').init(app)

app.listen(config.port)
console.log(`App listening on port ${ config.port }.`)

export default app
