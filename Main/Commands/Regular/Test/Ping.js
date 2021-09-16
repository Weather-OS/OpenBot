module.exports = {
    name: 'ping',
    description: 'Ping command',
    Logs: 'Has used the command ping to ping',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", "``Success`` Pong!")]});
    }
}