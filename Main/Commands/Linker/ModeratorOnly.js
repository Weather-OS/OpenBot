function isModerator(Locales, message){
    if(message.member.roles.cache.some(r=>Locales.DiscordLocale.Moderators.ModeratorRoles.includes(r.name))){
        return true;
    } else {
        return false;
    }
}

module.exports = { isModerator }