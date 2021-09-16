module.exports = {
    name: 'modping',
    description: 'ModPing command',

    execute(Locales, message, args){
        message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "ModPing", "``Success`` ModPong!")]});
    }
}