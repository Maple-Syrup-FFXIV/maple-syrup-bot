const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlapCommand extends BaseCommand {
  constructor() {
    super('slap', 'anime', []);
  }

  run(client, message, args) {
    message.channel.send('slap command works');
  }
}