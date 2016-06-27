const ENV = process.env.NODE_ENV || 'development'

const config = {
  database_url: "",
  database_username: process.env.WEREWOLVES_DATABASE_USERNAME,
  database_password: process.env.WEREWOLVES_DATABASE_PASSWORD
}

export default Object.assign({}, config, require(`./${ENV}.js`))
