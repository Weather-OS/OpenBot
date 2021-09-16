const fs = require('fs');

function LogCommand(LogMessage, Filename, Executor){

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    fs.appendFileSync('./Data/Logs/Commands/CommandLogs.txt', `[${dateTime}]: [${Filename}]: ${Executor}, ${LogMessage}\n`, function (err) {
        if (err){
            console.log(`[${Locales.Colors.FgRed}LogCommand.js${Locales.Colors.FgWhite}]${Locales.Colors.FgRed} CRITICAL ERROR OCCURED! EXITING${Locales.Colors.FgWhite}`);
            process.exit(1);
        }
    });
}

module.exports = { LogCommand };