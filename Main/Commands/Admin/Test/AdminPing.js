module.exports = {
    name: 'adminping',
    description: 'AdminPing command',
    emoji: "❓",
    Logs: 'Has used the command adminping to adminping',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "AdminPing", "``Success`` AdminPong!")]});
    }
}