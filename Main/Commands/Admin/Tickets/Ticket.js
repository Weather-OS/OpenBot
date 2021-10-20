const fs = require('fs');


module.exports = {
    name: 'ticket',
    description: 'Ticket command',
    emoji: "📫",
    Logs: 'Has used the command ticket to configure ticketting',
    RequiredPermissions: 'MANAGE_CHANNELS MANAGE_GUILD',

    async execute(Locales, message, args){

        let alreadysent = 0;

        let CurrentState = 1;

        let IsStillRunning = 1;

        const OriginalUserMessage = message;

        var localembed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting system", "``Information`` Set up Ticketting system. Options are:");

        var ClosedEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Closed.", "Closed.");
        
        localembed
        .addFields({
            name: "📮 Add",
            value: "Add Ticketting system",
            inline: true
        },
        {
            name: "⚙️ Configure",
            value: "Configure ticketting system",
            inline: true
        },
        {
            name: "❌ Close",
            value: "Close",
            inline: true
        });

        var FirstMessageSent = await message.channel.send({ embeds: [localembed]});
        
        await FirstMessageSent.react('📮');
        await FirstMessageSent.react('⚙️');
        await FirstMessageSent.react('❌');

        Locales.DiscordLocale.Client.on("messageReactionAddAfterBot" , async (reaction, user) => {
            
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(!reaction.message.guild) return;
            if(IsStillRunning == 0) return;

            if (reaction.message.channel.id == message.channel.id && user.id == OriginalUserMessage.author.id){
                if(CurrentState != 1) return;
                CurrentState++;
                if(reaction.emoji.name == '📮'){
                    var FirstSetupMessageEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Setting up", "``Setup`` Please enter the channel name of the ticketting system. Options are:");
                    FirstSetupMessageEmbed
                    .addFields({
                        name: "📧 Channel Name",
                        value: "Input Channel name",
                        inline: true
                    },
                    {
                        name: "❌ Close",
                        value: "Close",
                        inline: true
                    });
                    var FirstSetupMessage = await message.channel.send({ embeds: [FirstSetupMessageEmbed]});
                    await FirstSetupMessage.react('❌');

                    Locales.DiscordLocale.Client.on("messageReactionAddAfterBot" , async (reaction, user) => {
                        if(reaction.message.partial) await reaction.message.fetch();
                        if(reaction.partial) await reaction.fetch();
                        if(!reaction.message.guild) return;
                        if(IsStillRunning == 0) return;

                        if (reaction.message.channel.id == FirstSetupMessage.channel.id && user.id == OriginalUserMessage.author.id){
                            if (reaction.emoji.name == '❌'){
                                FirstSetupMessage.edit({ embeds: [ClosedEmbed]});
                                IsStillRunning = 0;
                                return;
                            }
                        }
                    });
                    Locales.DiscordLocale.Client.on('messageCreate', async message =>{
                        if (alreadysent == 1) return;
                        alreadysent = 1;
                        if(IsStillRunning == 0) return;
                        if(message.channel.id == FirstSetupMessage.channel.id && message.author.id == OriginalUserMessage.author.id){
                            if(!message.content || message.content.length >= 20) {
                                message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting system", "``Error`` Incorrect response")]});
                                IsStillRunning = 0;
                                return;
                            } else {
                                var channelname = message.content;
                                var SecondSetupMessageEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Setting up", "``Setup`` Please enter the channel category Id of the ticketting channel. Options are:");
                                SecondSetupMessageEmbed
                                .addFields({
                                    name: "📥 Channel Category ID",
                                    value: "Input Channel Category ID",
                                    inline: true
                                },
                                {
                                    name: "❌ Close",
                                    value: "Close",
                                    inline: true
                                }); 
                                var SecondSetupMessage = await message.channel.send({ embeds: [SecondSetupMessageEmbed]});
                                await SecondSetupMessage.react('❌');
                                Locales.DiscordLocale.Client.on("messageReactionAddAfterBot" , async (reaction, user) => {
                                    if(reaction.message.partial) await reaction.message.fetch();
                                    if(reaction.partial) await reaction.fetch();
                                    if(!reaction.message.guild) return;
                                    if(IsStillRunning == 0) return;
            
                                    if (reaction.message.channel.id == SecondSetupMessage.channel.id && user.id == OriginalUserMessage.author.id){
                                        if (reaction.emoji.name == '❌'){
                                            SecondSetupMessage.edit({ embeds: [ClosedEmbed]});
                                            IsStillRunning = 0;
                                            return;
                                        }
                                    }
                                });
                                Locales.DiscordLocale.Client.on('messageCreate', async message =>{
                                    if(IsStillRunning == 0) return;
                                    IsStillRunning = 0;
                                    if(message.channel.id == SecondSetupMessage.channel.id && message.author.id == OriginalUserMessage.author.id){
                                        if(!message.guild.channels.cache.find(cat => cat.id == message.content)) {
                                            message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting system", "``Error`` Incorrect response")]});
                                            IsStillRunning = 0;
                                            return;
                                        } else {
                                            message.guild.channels.create(channelname, "Channel").then(result => {
                                                result.permissionOverwrites.create(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                                                result.setParent(message.content);
                                                var TicketMessage = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting system", "``Tickets`` Submit a ticket. Options are:")
                                                .addFields({
                                                    name: "📩 New ticket",
                                                    value: "Open a ticket",
                                                    inline: true
                                                });
                                                result.send({ embeds: [TicketMessage], components: [Locales.DiscordLocale.Button.ButtonCache(Locales, "Open a ticket", "PRIMARY", "TICKET_CREATED", "✉️")]});
                                                var SETTINGS = JSON.parse(fs.readFileSync("./Settings/CoreSettings.json", "utf8"));
                                                SETTINGS["TicketSystemAvailable?"] = "1";
                                                fs.writeFileSync("./Settings/CoreSettings.json", JSON.stringify(SETTINGS));
                                            });
                                        }
                                    }
                                });
                               

                                    
                            }

                        }
                        
                    });
                }
                if(reaction.emoji.name == '⚙️'){
                    var ConfigMessageEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting Configuration", "``Information`` Configure Ticketting system. Options are:");
                    ConfigMessageEmbed
                    .addFields(
                        {
                            name: "📥 Inbox",
                            value: "Setup Where new\nTickets are created",
                            inline: true
                        },
                        {
                            name: "❌ Close",
                            value: "Close",
                            inline: true
                        }
                    );
                    var ConfigMessage = await message.channel.send({ embeds: [ConfigMessageEmbed]});
                    await ConfigMessage.react('📥');
                    await ConfigMessage.react('❌');
                    Locales.DiscordLocale.Client.on("messageReactionAddAfterBot" , async (reaction, user) => {
                        
                        if(reaction.message.partial) await reaction.message.fetch();
                        if(reaction.partial) await reaction.fetch();
                        if(!reaction.message.guild) return;

                        if (reaction.message.channel.id == message.channel.id && user.id == OriginalUserMessage.author.id){
                            if(CurrentState != 2) return;
                            CurrentState++;
                            if(reaction.emoji.name == '📥'){
                                var InboxMessageEmbed = Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting Inbox", "``Information`` Enter the category id where new tickets will be created. Options are:");
                                InboxMessageEmbed
                                .addFields(
                                    {
                                        name: "📥 Inbox Category ID",
                                        value: "Enter Inbox Category\nID",
                                        inline: true
                                    },
                                    {
                                        name: "❌ Close",
                                        value: "Close",
                                        inline: true
                                    }
                                );
                                var InboxMessage = await message.channel.send({ embeds: [InboxMessageEmbed]});
                                await InboxMessage.react('❌');

                                Locales.DiscordLocale.Client.on('messageCreate', async message =>{
                                    
                                    if(message.channel.id == InboxMessage.channel.id && message.author.id == OriginalUserMessage.author.id){
                                        if(CurrentState != 3) return;
                                        CurrentState++;
                                        if(!message.guild.channels.cache.find(cat => cat.id == message.content)) {
                                            message.channel.send({ embeds: [Locales.DiscordLocale.Embed.EmbedCache(Locales, "Ticketting system", "``Error`` Incorrect response")]});
                                            CurrentState = 0;
                                            return;
                                        } else {
                                        var SETTINGS = JSON.parse(fs.readFileSync("./Settings/CoreSettings.json", "utf8"));
                                        SETTINGS["TicketsCategory"] = message.content;
                                        fs.writeFileSync("./Settings/CoreSettings.json", JSON.stringify(SETTINGS));
                                        CurrentState = 0;
                                        return;
                                        }
                                    }
                                });
                            } else if (reaction.emoji.name == '❌'){
                                ConfigMessage.edit({ embeds: [ClosedEmbed]});
                                CurrentState = 0;
                                return;
                            }
                        }
                    });
                }
            }
        });
    }
}