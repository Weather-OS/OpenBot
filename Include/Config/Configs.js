
function GetSettings(Locales, message){

    Locales.Glob.util.getDirectories('./Main/Commands', function (err, res) {
        res = res.filter(path => !path.includes('Linker'));
        if (!Locales.DiscordLocale.AdminHandler.isAdministrator(Locales, message)){
            res = res.filter(path => !path.includes('Admin'));
        }
        if (!Locales.DiscordLocale.ModHandler.isModerator(Locales, message)){
            res = res.filter(path => !path.includes('Moderators'));
        }
        var arr = res.filter(file => file.endsWith('.js'));
        for(var i=0; i < arr.length; i++) {
            arr[i] = arr[i].replace("./", '../../');
        }
        return Locales.DiscordLocale.Organize(Locales, message, arr, "Help", `Prefix is \`\`${Locales.DiscordLocale.DiscordPrefix["Prefix"]}\`\`\nCommands Are:`);
    });
}

module.exports = { GetSettings };
