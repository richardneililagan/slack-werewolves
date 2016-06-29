const ENV = process.env.NODE_ENV || 'development'

const config = {
  port: process.env.PORT || 8000,

  database_url: "",
  database_username: process.env.WEREWOLVES_DATABASE_USERNAME,
  database_password: process.env.WEREWOLVES_DATABASE_PASSWORD
}

export default Object.assign({}, config, require(`./${ENV}.js`))
