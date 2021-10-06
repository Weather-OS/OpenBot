function isAdministrator(Locales, message){
    if(message.member.roles.cache.some(r=>Locales.DiscordLocale.Administrators.AdminRoles.includes(r.name))){
        return true;
    } else {
        return false;
    }
}

module.exports = { isAdministrator }