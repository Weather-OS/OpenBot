module.exports = {
    name: 'ping',
    description: 'Ping command',
    emoji: "❔",
    Logs: 'Has used the command ping to ping',
    RequiredPermissions: 'DEFAULTS',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", "``Success`` Pong!")]});
    }
}