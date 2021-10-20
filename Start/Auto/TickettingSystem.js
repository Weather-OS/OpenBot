const fs = require('fs');

async function Ticket(Locales){

    Locales.DiscordLocale.Client.on("interactionCreate", intercation => {
        if(intercation.isButton()){
            if (intercation.customId == "TICKET_CREATED"){
                
                //CHECKING PERMISSIONS
                const PermissionsRequired = "MANAGE_CHANNELS VIEW_CHANNEL SEND_MESSAGES"

                var SETTINGS = JSON.parse(fs.readFileSync("./Settings/CoreSettings.json", "utf8"));
                let ticketcount = SETTINGS["TicketsCount"];
                SETTINGS["TicketsCount"] = SETTINGS["TicketsCount"] + 1;
                fs.writeFileSync("./Settings/CoreSettings.json", JSON.stringify(SETTINGS));
                intercation.guild.channels.create(`Ticket-${ticketcount}`, "Channel").then(result => {
                    if(SETTINGS["TicketsCategory"] != "NON"){
                        result.setParent(SETTINGS["TicketsCategory"]);
                    }
                    result.permissionOverwrites.create(intercation.guild.roles.everyone, { VIEW_CHANNEL: false });
                    Locales.DiscordLocale.OverwriteAllChannelPermissions(Locales, intercation, result);
                    result.permissionOverwrites.create(intercation.user, { VIEW_CHANNEL: true });
                    var TicketLocalEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, `Ticket Number ${SETTINGS["TicketsCount"]}`, `Hello <@${intercation.user.id}>! A staff member will be with you shortly. To close this ticket, Click the close button.`);
                    var TicketCloseButton = Locales.DiscordLocale.Button.ButtonCache(Locales, "Close this ticket", "DANGER", "TICKET_CLOSED", "❌");
                    result.send({ embeds: [TicketLocalEmbed], components: [TicketCloseButton]});
                    Locales.DiscordLocale.Client.on("interactionCreate", intercationB => {
                        if(intercationB.isButton()){
                            if (intercationB.customId == "TICKET_CLOSED"){
                                result.send("Closing ticket...");
                                result.permissionOverwrites.create(intercation.user, { VIEW_CHANNEL: false });
                                result.setName(`Ticket-${ticketcount} - CLOSED`);
                            }
                        }
                    });
                });
            }
        }
    });
}

module.exports = { Ticket };