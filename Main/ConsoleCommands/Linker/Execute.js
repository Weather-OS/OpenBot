function TestIfConsoleCommandExists(Command, CommandParsed, args){
    const Console = require('./ConsoleCommand.js');
    Console.ConsoleCommandExists(Command, CommandParsed, args);
}

module.exports = { TestIfConsoleCommandExists }