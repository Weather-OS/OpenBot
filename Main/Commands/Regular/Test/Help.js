module.exports = {
    name: 'help',
    description: 'Help command',
    emoji: "🛠️",
    Logs: 'Has used the command help',

    async execute(Locales, message, args){
        Locales.DiscordLocale.GetSettings(Locales, message);
    }
}