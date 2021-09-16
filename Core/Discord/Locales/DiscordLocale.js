//REQUIREMENTS
const fs = require('fs');

//MAIN REQUIRE: DISCORD.JS
const Discord = require('discord.js');

//CLIENT
const Client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

//EMBEDS
const Embed = require('../Util/Embeds/EmbedSettings.js');

//EMBED SETTINGS
const EmbedSettings = JSON.parse(fs.readFileSync("./Settings/Embed.json", "utf-8"));

//TOKENS
const Token = require('../../../Client/Tokens/DiscordToken.js');

//PREFIX
var DiscordPrefix = JSON.parse(fs.readFileSync("./Settings/Prefix.json", "utf-8"));

//CATCHES
    //DISCORD LATENCY
        var DiscordLatency = require('../Util/Catch/DiscordLatency.js');

//PERMISSIONS
    //MODERATORS
        var Moderators = require('../Util/Permissions/Moderators.js');

//MODERATOR HANDLER
    //IS USER MODERATOR
        var ModHandler = require('../../../Main/Commands/Linker/ModeratorOnly.js');

//LISTENER
    var Listen = require('../../../Start/Events/ClientEvents/OnCollect.js');

//EXPORT DISCORD MODULE
module.exports = { Discord, Client, Token, Embed, EmbedSettings,  DiscordPrefix, DiscordLatency, Moderators, ModHandler, Listen };