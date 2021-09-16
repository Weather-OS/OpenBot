function Login(Locales){
    Locales.DiscordLocale.Client.once('ready', () =>{
        Locales.LogStartup(Locales);
    });
    Locales.Events.OnMessage.OnMessageCommand(Locales);
    Locales.DiscordLocale.Client.login(Locales.DiscordLocale.Token.TOKEN);
};

module.exports = { Login };