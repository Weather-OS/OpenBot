function CheckPermissions(Locales, permissions, message, filename){
    permissions = permissions.split(" ");
    for (let i = 0; i < permissions.length; i++){
        if (!message.guild.me.permissions.has(permissions[i])){
            Locales.Log(Locales, Locales.ConsoleTypes.STDERROR, filename, `Failed to execute. Missing permission: ${permissions[i]}. Permissions required for this file: ${permissions}`);
            return permissions[i];
        }
    }
    return "AVAIL_PERMISSIONS";
}

module.exports = { CheckPermissions };