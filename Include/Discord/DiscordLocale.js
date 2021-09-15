//MAIN REQUIRE: DISCORD.JS
const Discord = require('discord.js');

//CLIENT
const Client = new Discord.Client();

//TOKENS
const Token = require('../../Client/Tokens/DiscordToken.env');

//EXPORT DISCORD MODULE
module.exports = { Discord, Client };