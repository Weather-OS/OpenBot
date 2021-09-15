var Locales = require('../../../Core/Locale/Locale.js');
const path = require('path');
const fs = require('fs');

function CommandExecute(Locales, Command, message, args){
        Locales.DiscordLocale.Client.Commands = new Locales.DiscordLocale.Discord.Collection();
        var commandparse = '.' + Command;
        commandparse = commandparse.replace('Main/Commands/', '');
        const CommandSet = require(commandparse);
        Command = Command.split(/(\\|\/)/g).pop().toLowerCase();
        Command = Command.replace('.js', '');
        Locales.DiscordLocale.Client.Commands.set(CommandSet.name, CommandSet);
        Locales.DiscordLocale.Client.Commands.get(Command).execute(Locales, message, args)
}

function CommandExists(Command, message, args){
    Command = Command.toLowerCase() + '.js';
    Locales.Glob.util.getDirectories('./Main/Commands', function (err, res) {
        var DEF = ["EMPTY"]; 
        let ReturnValue = false;
        for (let file = 0; file < res.length; file++){
            DEF[file] = res[file].split(/(\\|\/)/g).pop().toLowerCase();
            if (DEF[file].includes(Command)){
                ReturnValue = true;
                CommandExecute(Locales, res[file], message, args);
            }
        }
        if (err) {
            console.log('[Command.js]: ', err);
            return false;
        } else if (!ReturnValue) {
            message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Error", "``error``: Invalid Command.")]});
            return;
        }
    });
}

module.exports = { CommandExists, CommandExecute };