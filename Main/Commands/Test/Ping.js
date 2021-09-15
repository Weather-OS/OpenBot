module.exports = {
    name: 'ping',
    description: 'Ping command',

    execute(Locale, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", "``Success``: Pong!")]});
    }
}