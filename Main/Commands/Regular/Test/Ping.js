module.exports = {
    name: 'ping',
    description: 'Ping command',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", "``Success`` Pong!")]});
    }
}