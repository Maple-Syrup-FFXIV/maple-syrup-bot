const mongoose = require('mongoose');

const GuildConfigSchema = new mongoose.Schema( {
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    prefix: {
        type: mongoose.Schema.Types.String,
        required: true,
        default: '$',
    },
});

module.exports = mongoose.model('GuildConfig', GuildConfigSchema);