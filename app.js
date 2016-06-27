const app = {}

app.init = _ => {
  // :: initialize database connection
  require('./db')
}

export default app
