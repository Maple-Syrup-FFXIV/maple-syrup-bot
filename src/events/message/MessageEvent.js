const BaseEvent = require('../../utils/structures/BaseEvent');
const GuildConfig = require('../../database/schemas/GuildConfig');
const Prefix = require('../../data/prefix');

const aPrefix = new Prefix().getInstance();
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    const guildConfig = await GuildConfig.findOne({ guildId: message.guild.id} );
    const prefix = guildConfig.get('prefix');
    if (message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        aPrefix.set(prefix);
        command.run(client, message, cmdArgs);
      }
    }
  }
}