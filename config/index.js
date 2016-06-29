const ENV = process.env.NODE_ENV || 'development'

const config = {
  port: process.env.PORT || 8000,

  database_url: process.env.WEREWOLVES_DATABASE_URL,
  database_username: process.env.WEREWOLVES_DATABASE_USERNAME,
  database_password: process.env.WEREWOLVES_DATABASE_PASSWORD,

  slack_client_id: process.env.SLACK_CLIENT_ID,
  slack_client_secret: process.env.SLACK_CLIENT_SECRET
}

export default Object.assign({}, config, require(`./${ENV}.js`))
