const Locales = require('../../Include/Locale/Locale.js');

function Login(){
    Locales.DiscordLocale.Client.once('ready', () => {
        console.log('Finalized');
    });
    client.login(Locales.DiscordLocale.Token);
};