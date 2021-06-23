const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const Commands = require('../../data/commands');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'misc', []);
  }

  run(client, message, args) {
    const data = [];
    const commands = new Commands().getInstance();

    data.push('Here\'s a list of commands');
    data.push(commands.get());

    return message.author.send(data, {split: true})
    .then(() => {
      if (message.channel.type === 'dm') return;
      message.reply('I\'ve sent you a DM with all my commands!');
    })
    .catch(err => {
      console.error(`Could not send help DM to ${message.author.tag}.\n`, err);
      message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
    });
  }
}