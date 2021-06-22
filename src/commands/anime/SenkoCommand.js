const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SenkoCommand extends BaseCommand {
  constructor() {
    super('senko', 'anime', []);
  }

  run(client, message, args) {
    message.channel.send('senko command works');
  }
}