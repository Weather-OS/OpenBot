const Locales = require('../../Include/Locale/Locale.js');

function Login(){
    Locales.DiscordLocale.Client.once('ready', () =>{
        console.log('finalized');
    });
    Locales.DiscordLocale.Client.Login(Locales.DiscordLocale.Token);
};

module.exports = { Login };