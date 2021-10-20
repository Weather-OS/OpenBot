function OverwriteAllChannelPermissions(Locales, message, channel){
    let rolemap = message.guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(r => r)
    .join(",")
    .split(",");
    rolemap.pop();
    let toRemoveMods = Locales.DiscordLocale.Moderators.GetModeratorRolesID(message);
    let toRemoveAdmin = Locales.DiscordLocale.Administrators.GetAdminRolesID(message);
    for (let RoleNum = 0; RoleNum < rolemap.length; RoleNum++){
        rolemap[RoleNum] = rolemap[RoleNum].replace("<@&", '');
        rolemap[RoleNum] = rolemap[RoleNum].replace(">", '');
        
        
    }
    rolemap = rolemap.filter( function( el ){
        return toRemoveAdmin.indexOf( el ) < 0;
    });
    rolemap = rolemap.filter( function( el ){
        return toRemoveMods.indexOf( el ) < 0;
    });
    for (let i = 0; i < rolemap.length; i++){
        rolemap[i] = message.guild.roles.cache.find(r => r.id == rolemap[i]);
        channel.permissionOverwrites.create(rolemap[i], { VIEW_CHANNEL: false });
    }
}

module.exports = { OverwriteAllChannelPermissions }