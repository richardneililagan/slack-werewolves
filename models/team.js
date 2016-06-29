const mongoose = require('../db')

const schema = mongoose.Schema({
  teamId: String,
  teamName: String,
  accessToken: String,
  botId: String,
  botToken: String
})

// :: where [data] is an object (JSON-parsed) response from Slack oAuth
schema.statics.registerFromSlack = function (data, cb) {
  const query = this.findOne({ teamId: data.team_id })
  return query.exec()
    .then(team => {
      team = team || new this({})

      team.teamId = data.team_id,
      team.teamName = data.team_name,
      team.accessToken = data.access_token,
      team.botId = data.bot.bot_user_id,
      team.botToken = data.bot.bot_access_token

      team.save()
    })
    .catch(err => {
      console.log(err)
    })
}

export default mongoose.model('Team', schema)
