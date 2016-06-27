const ENV = process.env.NODE_ENV || 'development'

const config = {
  database_url: "",
  database_username: process.env.WEREWOLVES_DATABASE_USERNAME,
  database_password: process.env.WEREWOLVES_DATABASE_PASSWORD
}

const parsed_config = Object.assign({}, config, require(`./${ENV}.js`))

export default parsed_config

