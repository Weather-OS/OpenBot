function Login(Locales){

    Locales.DiscordLocale.Client.once('ready', () =>{
        Locales.LogStartup(Locales);
        Locales.ActivateConsoleExecution(Locales);
    });
    Locales.Events.OnMessage.OnMessageCommand(Locales);
    Locales.DiscordLocale.RListen.Reactions(Locales);
    if(Locales.CoreSettings["EmitReactionPackets?"] == "1"){
        Locales.DiscordLocale.EmitReact(Locales);
    }
    if (Locales.CoreSettings["PacketLoggingEnabled?"] == "1"){
        Locales.DiscordLocale.ActivatePacketReader(Locales);
    }
    
    Locales.DiscordLocale.Ticket(Locales);
    Locales.DiscordLocale.Client.login(Locales.DiscordLocale.Token.TOKEN);
};

module.exports = { Login };