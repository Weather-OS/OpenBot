//REQUIREMENTS
    const fs = require('fs');

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

//LOCAL SETTINGS
    var LocalSettings = JSON.parse(fs.readFileSync("./Settings/LocalSettings.json", "utf-8"));

//STARTUP
    var { Login } = require('../../Start/Auth/Login.js');
    var { LogStartup } = require('../../Start/StartupMessage.js');

//UTILIZATION
    //COLORS
        var Colors = require('../Util/ColorRef.js');

//EXPORT MODULES
module.exports = { DiscordLocale, Execute, Events, Glob, os, Login, LocalSettings, Colors, LogStartup };