function OnMessage(Locales){
    Locales.DiscordLocale.Client.on('message', message =>{
        if(message.author.bot) return;
        return message;
    });
}

function OnMessageAsync(Locales){
    Locales.DiscordLocale.Client.on('message', async message =>{
        if(message.author.bot) return;
    });
}

function OnMessageCommand(Locales){
    Locales.DiscordLocale.Client.on('messageCreate', message =>{
        if(!message.content.startsWith(Locales.DiscordLocale.DiscordPrefix["Prefix"]) || message.author.bot) return;
        var PermissionsExist = Locales.DiscordLocale.CheckPermissions(Locales, Locales.LocalSettings["OverallRequiredPermissions"], message, "ClientEvents.permissions(new OpenBotLocal.Permissions)");
        if(PermissionsExist != "AVAIL_PERMISSIONS"){
            message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Missing permissions", `This bot is missing permission ${PermissionsExist}.\n Please check and make sure the bot has this permission in this server.`)]});
            return;
        }
        const args = message.content.slice(Locales.DiscordLocale.DiscordPrefix["Prefix"].length).split(/ +/);
        const command = args.shift().toLowerCase();

        var testbool = Locales.Execute.TestIfCommandExists(command, message, args);
        });
}

function OnMessageCondition(Locales, ConditionsArray){
    Locales.DiscordLocale.Client.on('message', message =>{
        if(message.author.bot) return;
        if(ConditionsArray.includes(message.content())){
            return message.content();
        }
    });
}

module.exports = { OnMessage, OnMessageAsync, OnMessageCommand, OnMessageCondition };