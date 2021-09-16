module.exports = {
    name: 'pingms',
    description: 'Pingms command',
    Logs: 'Has used the command pingms to view ping data',

    execute(Locales, message, args){
        message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Pingms", "``pingms `` Calculating ping...")]})
        .then(resultMessage => {
            const ping = Date.now() - message.createdTimestamp;
            const DiscordLatency = Locales.DiscordLocale.DiscordLatency.Latency(Locales.DiscordLocale.Client);
            resultMessage.edit({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Pingms", `\`\`Success\`\` Bot Latancy is: ${Date.now() - message.createdTimestamp}ms And discord's Latency is: ${DiscordLatency}ms`)]});
        });
    }
}