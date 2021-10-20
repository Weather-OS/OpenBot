module.exports = {
    name: 'ban',
    description: 'Ban Console command',
    emoji: "⚒️",
    Logs: 'Has used the Console command Ban',
    RequiredPermissions: 'DEFAULTS',
    
    async execute(Locales, Command, args){
        var User = Locales.DiscordLocale.Client.users.cache.find(user => user.id == args[0]);
        User.ban();
    }
}
