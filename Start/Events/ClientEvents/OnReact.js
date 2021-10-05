function Reactions(Locales){
    Locales.DiscordLocale.Client.on('raw', packet => {
        if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
        const channel = Locales.DiscordLocale.Client.channels.cache.get(packet.d.channel_id);
        if (channel.messages.cache.has(packet.d.message_id)) return;
        channel.messages.fetch(packet.d.message_id).then(message => {
            const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
            const reaction = message.reactions.cache.get(emoji);
            if (reaction) reaction.users.cache.set(packet.d.user_id, Locales.DiscordLocale.Client.users.cache.get(packet.d.user_id));
            if (packet.t === 'MESSAGE_REACTION_ADD') {
                Locales.DiscordLocale.Client.emit('messageReactionAdd', reaction, Locales.DiscordLocale.Client.users.cache.get(packet.d.user_id));
            }
            if (packet.t === 'MESSAGE_REACTION_REMOVE') {
                Locales.DiscordLocale.Client.emit('messageReactionRemove', reaction, Locales.DiscordLocale.Client.users.cache.get(packet.d.user_id));
            }
        });
        
    });
}

module.exports = { Reactions };