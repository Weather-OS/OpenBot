function EmitReact(Locales){
    Locales.DiscordLocale.Client.on('raw', packet => {
        if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
        const channel = Locales.DiscordLocale.Client.channels.cache.get(packet.d.channel_id);
        channel.messages.fetch(packet.d.message_id).then(message => {
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        const reaction = message.reactions.cache.get(emoji);
            if (packet.t == 'MESSAGE_REACTION_ADD') {
                if (packet.d.member.user.bot){
                    //donothing();
                } else {
                Locales.DiscordLocale.Client.emit('messageReactionAddAfterBot', reaction, Locales.DiscordLocale.Client.users.cache.get(packet.d.user_id));
                }
            }
            else if (packet.t == 'MESSAGE_REACTION_REMOVE') {
                Locales.DiscordLocale.Client.emit('messageReactionRemoveAfterBot', reaction, Locales.DiscordLocale.Client.users.cache.get(packet.d.user_id));
            }
        });
    });
}

module.exports = { EmitReact };
