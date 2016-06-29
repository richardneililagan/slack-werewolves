const request = require('request-promise')
const qs = require('querystring')

const config = require('../../config')

const Auth = {}

// :: OAuth kickstart
Auth.initiate = (_ => {
  const oAuthContext = {
    'client_id': config.slack_client_id,
    'scope': [
      'commands',
      'bot'
    ].join(' ')
  }

  const querystring = qs.stringify(oAuthContext)

  return function * () {
    this.redirect(`https://slack.com/oauth/authorize?${ querystring }`)
  }
})()

// :: OAuth handshake receiver
Auth.receive_handshake = function * () {
  const handshake_code = this.request.query['code']

  console.log(config.slack_client_id)

  yield request({
    method: 'POST',
    uri: 'https://slack.com/api/oauth.access',
    form: {
      'client_id': config.slack_client_id,
      'client_secret': config.slack_client_secret,
      'code': handshake_code
    }
  })
  .then(responseBody => {
    this.body = responseBody
  })
  .catch(err => {
    console.log(err)
  })
}

export default Auth
