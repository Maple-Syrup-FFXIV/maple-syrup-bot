module.exports = {
    requiredPermissions: ['ADMINISTRATOR'],
    expectedArgs: 'Bruh',
    init: (client) => {
        const checkForPosts = async () => {
            setTimeout(checkForPosts, 1)
        }
    },
    callback: async ({message, args}) => {
        const { mentions, guild, channel } = message
        
        const targetChannel = mentions.channels.first()
        if(!targetChannel){

        }
    }
}