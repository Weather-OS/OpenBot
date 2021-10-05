//REQUIREMENTS
const fs = require('fs');

//MAIN REQUIRE: DISCORD.JS
const Discord = require('discord.js');

//CLIENT
const Client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

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


//REACT LISTENER
    var RListen = require('../../../Start/Events/ClientEvents/OnReact.js');

//REACTIONS
    var React = require('../Util/Reactions/React.js');

//ORGANIZE 
    var { Organize } = require('../../Modules/Organizer.js');

//CONFIGS
    var { GetSettings } = require('../../../Include/Config/Configs.js');

//REACTPACKET
    var { EmitReact } = require('../Util/Reactions/EmitReact.js');

//PACKETLOGGER
    var { ActivatePacketReader } = require('../Util/Packet/Packet.js');


//EXPORT DISCORD MODULE
module.exports = { Discord, Client, Token, Embed, EmbedSettings,  DiscordPrefix, DiscordLatency, Moderators, ModHandler, Listen, React, RListen, Organize, GetSettings, EmitReact, ActivatePacketReader};