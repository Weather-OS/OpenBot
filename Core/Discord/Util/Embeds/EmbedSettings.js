function EmbedCache(Locale, Title, Description){
    var embed = new Locale.DiscordLocale.Discord.MessageEmbed()
    .setColor(Locale.DiscordLocale.EmbedSettings["EmbedColor"])
    .setTitle(Title)
    .setDescription(Description);
    return embed;
}
module.exports = { EmbedCache }