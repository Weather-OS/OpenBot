const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
function ActivateConsoleExecution(Locales){
    
    readline.question(`${Locales.LocalSettings["Botname"]}$>`, Command => {
        const args = Command.split(/ +/);
        const CommandParsed = args.shift().toLowerCase();
        Locales.TestIfConsoleCommandExists(Command, CommandParsed, args);
        ActivateConsoleExecution(Locales);
    });
}

module.exports = { ActivateConsoleExecution }