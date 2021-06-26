const BaseEvent = require("../../utils/structures/BaseEvent");
const Prefix = require("../../data/prefix");
const https = require("https");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const aPrefix = new Prefix().getInstance();

const agent = new https.Agent({
  rejectUnauthorized: false,
});
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client, message) {
    if (message.author.bot) return;

    axios
      .get(
        process.env.URL + "GuildConfig/GetGuildConfig/" + message.guild.id,
        { httpsAgent: agent },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        aPrefix.set(res.data.prefix);

        if (message.content.startsWith(aPrefix.get())) {
          const [cmdName, ...cmdArgs] = message.content
            .slice(aPrefix.get().length)
            .trim()
            .split(/\s+/);
          const command = client.commands.get(cmdName);
          if (command) {
            command.run(client, message, cmdArgs);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
};
