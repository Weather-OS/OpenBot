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
        var Colors = require('./Util/ColorRef.js');

//LOGS
    //ERROR LOG
        var { LogError } = require('../Log/LogError.js');
    //COMMAND LOG
        var { LogCommand } = require('../Log/LogCommands.js');

//CORE SETTINGS
    var CoreSettings = JSON.parse(fs.readFileSync("./Settings/CoreSettings.json", "utf-8"));

//CONSOLEREFS
    var ConsoleTypes = require('./Util/ConsoleRef.js');

//CONSOLELOGS
    var { Log } = require('./Util/ConsoleLog.js');

//EXPORT MODULES
module.exports = { DiscordLocale, Execute, Events, Glob, os, Login, LocalSettings, Colors, LogStartup, LogError, LogCommand, CoreSettings, ConsoleTypes, Log };