const BaseCommand = require('../../utils/structures/BaseCommand');
const Megumin = require('../../data/megumin');
const discord = require('discord.js');

const megumin = new Megumin();

module.exports = class MeguminCommand extends BaseCommand {
  constructor() {
    super('megumin', 'anime', []);
  }

  run(client, message, args) {
    const embed = new discord.MessageEmbed()
    .setColor('#FFFF00')
    .setImage(megumin.getRandom())
    .setFooter('Powered by files.oki.moe')
    .setTimestamp();

    message.channel.send(embed);
  }
}