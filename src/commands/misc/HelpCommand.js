const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const Commands = require('../../data/commands');
const Prefix = require('../../data/prefix');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'misc', []);
  }

  run(client, message, args) {
    const data = [];
    const commands = new Commands().getInstance();
    const prefix = new Prefix().getInstance();

    data.push('Here\'s a list of commands');
    commands.get().forEach(element => {
      data.push(prefix.get() + element);
    });
    

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