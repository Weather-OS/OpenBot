module.exports = {
    name: 'pingms',
    description: 'Pingms command',

    execute(Locale, message, args){
        let msg = message.reply({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", "``pingms: ``: Calculating ping...")]})
        .then(resultMessage => {
            const ping = resultMessage.createdTimeStamp - message.createdTimeStamp;
            msg.edit({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ping", `\`\`Success\`\`: Bot Latancy is: ${ping}`)]});
        });
    }
}