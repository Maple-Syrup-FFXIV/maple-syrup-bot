
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();
const mongoose = require('mongoose');
const commands = require('./data/commands');

var listCommands = new commands().getInstance();
mongoose.connect('mongodb+srv://pythagoras:35EwU75uGF6BGXVl@maplecluster.2sn3v.mongodb.net/mapledashboard?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
(async () => {
  client.commands = new Map();
  client.events = new Map();
  //client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');

  listCommands.set(Array.from(client.commands.keys()));
  await client.login(config.token);
})();

