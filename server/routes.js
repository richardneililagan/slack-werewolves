const httpLogger = require('koa-logger')
const route = require('koa-route')

// :: controllers
const auth = require('./controllers/auth.controller.js')

const router = {
  init (app) {
    // TODO
    app.use(route.get('/', function * () {
      this.body = 'Hello World'
    }))

    // :: auth scope
    app.use(route.get('/auth', auth.initiate))
    app.use(route.get('/auth/handshake_receiver', auth.receive_handshake))
  }
}

export default router
