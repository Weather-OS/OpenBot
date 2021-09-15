const Locales = require('../../Include/Locale/Locale.js');

function Login(){
    Locales.DiscordLocale.Client.once('ready', () =>{
        console.log('finalized');
    });
    Locales.DiscordLocale.Client.login(Locales.DiscordLocale.Token.TOKEN);
};

module.exports = { Login };