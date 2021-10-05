const fs = require('fs');


function ActivatePacketReader(Locales){

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    Locales.DiscordLocale.Client.on("raw", PACKET => {
        fs.appendFileSync('./Data/Logs/Console/ConsoleLogs.txt', `[${dateTime}]: PACKET: ${JSON.stringify(PACKET)}\n`, function (err) {
        if (err){
            console.log(`[${Locales.Colors.FgRed}LogCommand.js${Locales.Colors.FgWhite}]${Locales.Colors.FgRed} CRITICAL ERROR OCCURED! EXITING${Locales.Colors.FgWhite}`);
            process.exit(1);
        }
    });
    })
}

module.exports = { ActivatePacketReader };