module.exports = {
    name: 'help',
    description: 'Help Console command',
    emoji: "🛠️",
    Logs: 'Has used the Console command help',
    RequiredPermissions: 'DEFAULTS',
    
    async execute(Locales, Command, args){
        console.log("Hey, I'm still in development!");
    }
}
