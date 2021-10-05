function Organize(Locales, message, toOrganize, Title, Description){

    var LocalEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, Title, Description);

    var page = 1;
    OrganizeCallBack(page);

    function PageSet(emoji, message, page){
        if (emoji == ":arrow_forward:"){
            OrganizeCallBack(page++);
        } else if (emoji == ":arrow_backward:"){
            OrganizeCallBack(page--);
        } else if (emoji == "❌"){
            message.edit({ embeds : [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Closed", "This message was closed")]});
            return;
        }
    }

    async function OrganizeCallBack(page){
        var Pages = parseInt(toOrganize.length%9, 10);
        var i = 0;
        if (page > 1){
            Locales.DiscordLocale.React.ReactToMessage(messages, '◀️');
        }
        var toOrganizeSetsLConf;
        for (var toOrganizeSets of toOrganize){
            i++;
            toOrganizeSetsLConf = i;
            toOrganizea = require(toOrganizeSets);
            toOrganizeSets = (page-1)*9;
            LocalEmbed
            .addFields(
                { name: toOrganizea.emoji + toOrganizea.name, value: toOrganizea.description, inline: true}
            );
            if (i == 9){
                break;
            }
        }
        var messages = await message.channel.send({embeds: [LocalEmbed]});
        messages.react('❌');
        if (toOrganizeSetsLConf >= 9+((page-1)*9)){
                    
            if (page < Pages){
                    await messages.react('▶️');
                }
            } if (page > 1){
                await messages.react(messages, '◀️');
            }
        Locales.DiscordLocale.Client.on('messageReactionAddAfterBot', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            PageSet(reaction.emoji.name, messages, page);
            return;
        });
    }   
}

module.exports = { Organize };