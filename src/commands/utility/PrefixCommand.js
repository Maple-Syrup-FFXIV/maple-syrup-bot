const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PrefixCommand extends BaseCommand {
  constructor() {
    super('prefix', 'utility', []);
  }

  run(client, message, args) {
    message.channel.send('prefix command works');
  }
}