function Login(Locales){

    Locales.DiscordLocale.Client.once('ready', () =>{
        Locales.LogStartup(Locales);
    });
    Locales.Events.OnMessage.OnMessageCommand(Locales);
    Locales.DiscordLocale.RListen.Reactions(Locales);
    if(Locales.CoreSettings["EmitReactionPackets?"] == "1"){
        Locales.DiscordLocale.EmitReact(Locales);
    }
    if (Locales.CoreSettings["PacketLoggingEnabled?"] == "1"){
        Locales.DiscordLocale.ActivatePacketReader(Locales);
    }
    if(Locales.CoreSettings["TicketSystemAvailable?"] == "1"){
        Locales.DiscordLocale.Ticket(Locales);
    }
    Locales.DiscordLocale.Client.login(Locales.DiscordLocale.Token.TOKEN);
};

module.exports = { Login };