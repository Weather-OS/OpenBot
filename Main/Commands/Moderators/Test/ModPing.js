module.exports = {
    name: 'modping',
    description: 'ModPing command',
    Logs: 'Has used the command modping to modping',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "ModPing", "``Success`` ModPong!")]});
    }
}