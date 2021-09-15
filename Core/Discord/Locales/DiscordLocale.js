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

//EXPORT DISCORD MODULE
module.exports = { Discord, Client, Token, Embed, EmbedSettings,  DiscordPrefix };