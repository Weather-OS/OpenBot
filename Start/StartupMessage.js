const fs = require('fs');

function LogStartup(Locales){
    const StartupMessage = './Settings/StartupMessage.txt'
    try {
        const data = fs.readFileSync(StartupMessage, 'utf8');
        Locales.Log(Locales, Locales.ConsoleTypes.STDSUCCESS, "StartupMessage.js", "");
        console.log(data);
    } catch (e) {
        Locales.Log(Locales, Locales.ConsoleTypes.STDERROR, "StartupMessage.js", `File not found: ${StartupMessage}`);
    }
}

module.exports = { LogStartup };