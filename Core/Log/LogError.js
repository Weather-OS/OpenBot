const fs = require('fs');

function LogError(ErrorMessage, Filename){

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    fs.appendFileSync('./Data/Logs/Errors/ErrorLogs.txt', `[${dateTime}]: [${Filename}]: ${ErrorMessage}\n`, function (err) {
        if (err){
            Locales.Log(Locales, Locales.ConsoleTypes.STDERROR, "LogError.js", "CRITICAL ERROR OCCURED! EXITING...");
            process.exit(1);
        }
    });
}

module.exports = { LogError };