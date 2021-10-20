var Locales = require('../../../Core/Locale/Locale.js');
const path = require('path');
const fs = require('fs');

function ConsoleCommandExecute(File, Command, args, CommandParsed){
    Locales.DiscordLocale.Client.ConsoleCommands = new Locales.DiscordLocale.Discord.Collection();
    var commandparse = '.' + File;
    commandparse = commandparse.replace('Main/ConsoleCommands/', '');
    const CommandSet = require(commandparse);
    Command = Command.split(/(\\|\/)/g).pop().toLowerCase();
    Command = Command.replace('.js', '');
    try {
        Locales.DiscordLocale.Client.ConsoleCommands.set(CommandSet.name, CommandSet);
        Locales.LogCommand(CommandSet.Logs, commandparse, "Client.ConsoleUser");
        Locales.DiscordLocale.Client.ConsoleCommands.get(Command).execute(Locales, Command, args);
    } catch (e){
        Locales.Log(Locales, Locales.ConsoleTypes.STDERROR, "ConsoleCommand.js", `Failed to execute ${commandparse}.`);
        Locales.LogError(e, commandparse);
    }
}

function ConsoleCommandExists(CMD, Command, args){

    var CommandParsed = Command;
    Command = Command.toLowerCase() + '.js';
    Locales.Glob.util.getDirectories('./Main/ConsoleCommands', function (err, res) {    
        var DEF = ["EMPTY"]; 
        let ReturnValue = false;
        for (let file = 0; file < res.length; file++){
            DEF[file] = res[file].split(/(\\|\/)/g).pop().toLowerCase();
            var isNotACommand = res[file].indexOf("Linker") !=-1? true: false;
            if (DEF[file] == Command && !isNotACommand) {
                ConsoleCommandExecute(res[file], Command, args, CommandParsed);
                ReturnValue = true;
            }
        } if (err) {
            console.log('[Command.js]: ', err);
            return false;
        } else if (!ReturnValue) {
            try{
                var Commandexecuted = eval(CMD);
            } catch (err) {
                Locales.Log(Locales, Locales.ConsoleTypes.STDERROR, "Client.console(new node.console)", err);
            }
            return;
        }
    });
        
}

module.exports = { ConsoleCommandExists, ConsoleCommandExecute }