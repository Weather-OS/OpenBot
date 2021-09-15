module.exports = {
    name: 'ping',
    description: 'Ping command',

    execute(Locale, message, args){
        message.reply('PONG!!!!!!');
    }
}