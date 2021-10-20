var Locales = require('../../../Core/Locale/Locale.js');
const path = require('path');
const fs = require('fs');

function CommandExecute(Command, message, args, CommandParsed){
        Locales.DiscordLocale.Client.Commands = new Locales.DiscordLocale.Discord.Collection();
        var commandparse = '.' + Command;
        commandparse = commandparse.replace('Main/Commands/', '');
        if(Locales.CoreSettings["DisabledCommands"].includes(CommandParsed)) return console.log(`[${Locales.Colors.FgYellow}Command.js${Locales.Colors.FgWhite}]${Locales.Colors.FgYellow} Tried to execute: ${commandparse}, But its a disabled command${Locales.Colors.FgWhite}.`);
        const CommandSet = require(commandparse);
        console.log(`[${Locales.Colors.FgBlue}Command.js${Locales.Colors.FgWhite}] ${message.author.username}, Is executing: ${commandparse}.`);
        if(CommandSet.RequiredPermissions != "DEFAULTS"){
            var PermissionsExist = Locales.DiscordLocale.CheckPermissions(Locales, CommandSet.RequiredPermissions, message, `Command.js -> ${commandparse}`);
            if(PermissionsExist != "AVAIL_PERMISSIONS"){
                message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Missing permissions", `This bot is missing permission ${PermissionsExist}.\n Please check and make sure the bot has this permission in this server.`)]});
                return;
            }
        }
        Command = Command.split(/(\\|\/)/g).pop().toLowerCase();
        Command = Command.replace('.js', '');
        try {
            Locales.DiscordLocale.Client.Commands.set(CommandSet.name, CommandSet);
            Locales.LogCommand(CommandSet.Logs, commandparse, message.author.username);
            Locales.DiscordLocale.Client.Commands.get(Command).execute(Locales, message, args);
        } catch (e){
            console.log(`[${Locales.Colors.FgRed}Command.js${Locales.Colors.FgWhite}]${Locales.Colors.FgRed} Failed to execute: ${commandparse}.${Locales.Colors.FgWhite}.`);
            message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Error", "``error``: Command failed to execute.")]});
            Locales.LogError(e, commandparse);
        }
}

function CommandExists(Command, message, args){
    var CommandParsed = Command;
    Command = Command.toLowerCase() + '.js';
    Locales.Glob.util.getDirectories('./Main/Commands', function (err, res) {
        var DEF = ["EMPTY"]; 
        let ReturnValue = false;
        for (let file = 0; file < res.length; file++){
            DEF[file] = res[file].split(/(\\|\/)/g).pop().toLowerCase();
            var isModeratorCommand = res[file].indexOf("Moderators") !=-1? true: false;
            var isAdminCommand = res[file].indexOf("Admin") !=-1? true: false;
            var isNotACommand = res[file].indexOf("Linker") !=-1? true: false;
            if (DEF[file] == Command && !isModeratorCommand && !isAdminCommand && !isNotACommand){
                ReturnValue = true;
                CommandExecute(res[file], message, args, CommandParsed);
            } else if (DEF[file] == Command && isModeratorCommand && !isNotACommand){
                if (Locales.DiscordLocale.ModHandler.isModerator(Locales, message) || Locales.DiscordLocale.AdminHandler.isAdministrator(Locales, message)){
                    ReturnValue = true;
                    CommandExecute(res[file], message, args, CommandParsed);
                } else {
                    ReturnValue = true;
                    Locales.Log(Locales, Locales.ConsoleTypes.STDWARNING, "Command.js", `${message.author.username}, Couldn't execute: ${res[file]}. User does not have enough permissions.`);
                    message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Access Denied", "``error``: Not enough permissions to run this command.")]});
                }
            } else if (DEF[file] == Command && isAdminCommand && !isNotACommand){
                if(Locales.DiscordLocale.AdminHandler.isAdministrator(Locales, message)){
                    ReturnValue = true;
                    CommandExecute(res[file], message, args, CommandParsed);
                } else {
                    ReturnValue = true;
                    Locales.Log(Locales, Locales.ConsoleTypes.STDWARNING, "Command.js", `${message.author.username}, Couldn't execute: ${res[file]}. User does not have enough permissions.`);
                    message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Access Denied", "``error``: Not enough permissions to run this command.")]});
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