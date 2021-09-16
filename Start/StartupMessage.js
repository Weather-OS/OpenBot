const fs = require('fs');

function LogStartup(Locales){
    const StartupMessage = './Settings/StartupMessage.txt'
    try {
        const data = fs.readFileSync(StartupMessage, 'utf8');
        console.log(`[${Locales.Colors.FgGreen}StartupMessage.js${Locales.Colors.FgWhite}]`);
        console.log(data);
    } catch (e) {
        console.log(`[${Locales.Colors.FgRed}StartupMessage.js${Locales.Colors.FgWhite}]${Locales.Colors.FgRed} File not found: ${StartupMessage}${Locales.Colors.FgWhite}`);
    }
}

module.exports = { LogStartup };