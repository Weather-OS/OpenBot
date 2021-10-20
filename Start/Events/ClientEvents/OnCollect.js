function OnCollect(Locales, message, MessageToSend, callback){
    message.channel.send(MessageToSend);
    const collector = new Locales.DiscordLocale.Discord.MessageCollector(message.channel, 
        m => m.author.id === message.author.id, 
        { time: 10}
        );
    collector.on('collect', newmessage => {
        if (newmessage.author.bot) return;
        callback(newmessage);
    });
}

module.exports = { OnCollect };