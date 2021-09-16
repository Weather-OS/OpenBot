module.exports = {
    name: 'configure',
    description: 'Configure command',
    Logs: 'Has used the command configure to configure the bot',

    execute(Locales, message, args){
        
        function MessageRecieved(message){
            if (message.content === "ok"){
                message.reply("thanks");
            } else {
                message.reply("\\:(");
            }
        }
        Locales.DiscordLocale.Listen.OnCollect(Locales, message, "Give me something", MessageRecieved);
    }
}