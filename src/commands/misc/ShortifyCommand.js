const BaseCommand = require('../../utils/structures/BaseCommand');
const validUrl = require('valid-url');
const axios = require('axios');

module.exports = class ShortifyCommand extends BaseCommand {
  constructor() {
    super('shortify', 'misc', []);
  }

  run(client, message, args) {

    if (args.length == 0) {
      return message.channel.send('Not enough argument supplied!');
    }

    if (!validUrl.isUri(args[0])) {
      return message.channel.send('The argument provided is not a valid url!');
    }
    
    axios.post('http://shortify.yamisuresshu.com/api/url/shorten', {
      longUrl: args[0]
    }, {
      headers: {
        'content-type': 'application/json'
      }
    }
    )
    .then((res) => {
      message.channel.send(res.data.shortUrl);
    })
    .catch((error) => {
      message.channel.send(error);
      console.log(error);
    });
  }
}