const BaseCommand = require('../../utils/structures/BaseCommand');
const Holo = require('../../data/holo');
const discord = require('discord.js');

const holo = new Holo();

module.exports = class HoloCommand extends BaseCommand {
  constructor() {
    super('holo', 'anime', []);
  }

  run(client, message, args) {
    const embed = new discord.MessageEmbed()
    .setColor('#FFFF00')
    .setImage(holo.getRandom())
    .setFooter('Powered by files.oki.moe')
    .setTimestamp();

    message.channel.send(embed);
  }
}