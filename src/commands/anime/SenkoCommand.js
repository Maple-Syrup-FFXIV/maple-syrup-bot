const BaseCommand = require('../../utils/structures/BaseCommand');
const Senko = require('../../data/senko');
const discord = require('discord.js');

const senko = new Senko();

module.exports = class SenkoCommand extends BaseCommand {
  constructor() {
    super('senko', 'anime', []);
  }

  run(client, message, args) {
    
    const embed = new discord.MessageEmbed()
    .setColor('#FFFF00')
    .setImage(senko.getRandom())
    .setFooter('Powered by files.oki.moe')
    .setTimestamp();

    message.channel.send(embed);
  }
}