const app = {}

app.init = _ => {
  // :: initialize database connection
  require('./db')
  require('./server')
}

export default app
