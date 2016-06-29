const httpLogger = require('koa-logger')
const route = require('koa-route')

const router = {
  init (app) {
    // TODO
    app.use(route.get('/', function * () {
      this.body = 'Hello World'
    }))
  }
}

export default router
