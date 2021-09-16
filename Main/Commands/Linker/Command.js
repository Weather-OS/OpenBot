var Locales = require('../../../Core/Locale/Locale.js');
const path = require('path');
const fs = require('fs');

function CommandExecute(Command, message, args){
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
            var isModeratorCommand = res[file].indexOf("Moderators") !=-1? true: false;
            if (DEF[file].includes(Command) && !isModeratorCommand){
                ReturnValue = true;
                CommandExecute(res[file], message, args);
            } else if (DEF[file].includes(Command) && isModeratorCommand){
                if (Locales.DiscordLocale.ModHandler.isModerator(Locales, message)){
                    ReturnValue = true;
                    CommandExecute(res[file], message, args);
                } else {
                    ReturnValue = true;
                    message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Acess Denied", "``error``: Not enough permissions to run this command.")]});
                }
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