var Locales = require('../../Core/Locale/Locale.js');
function Login(){
    Locales.DiscordLocale.Client.once('ready', () =>{

    });
    Locales.Events.OnMessage.OnMessageCommand(Locales);
    Locales.DiscordLocale.Client.login(Locales.DiscordLocale.Token.TOKEN);
};

module.exports = { Login };