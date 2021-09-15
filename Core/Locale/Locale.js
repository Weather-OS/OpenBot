//DISCORD LOCALES
    var DiscordLocale = require('../Discord/Locales/DiscordLocale.js');

//GLOB LOCALES
    var Glob = require('../Glob/Locale/GlobLocale.js');

//EXECUTE COMMANDS
    var Execute = require('../../Main/Commands/Linker/Execute.js');

//EVENT INCLUDES
    var Events = require('../../Start/Events/Includes.js');

//GLOBAL INCLUDES
    var os = require('os');

//EXPORT MODULES
module.exports = { DiscordLocale, Execute, Events, Glob, os };