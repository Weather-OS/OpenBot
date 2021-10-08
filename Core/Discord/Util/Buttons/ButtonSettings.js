function ButtonCache(Locale, Label, Style, CustomId, Emoji){
    var button = new Locale.DiscordLocale.Discord.MessageActionRow()
    .addComponents(
        new Locale.DiscordLocale.Discord.MessageButton()
            .setCustomId(CustomId)
            .setLabel(Label)
            .setStyle(Style)
            .setEmoji(Emoji),

    );
    return button;
}
module.exports = { ButtonCache }