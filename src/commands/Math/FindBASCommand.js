const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FindBASCommand extends BaseCommand {
  constructor() {
    super('findBAS', 'Math', []);
  }

  run(client, message, args) {
    message.channel.send('findBAS command works');
  }
}