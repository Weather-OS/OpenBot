# OpenBot

## How to use

- Creating a bot on your own discord server
    1. Go to https://discord.com/developers And log in if you haven't.
    2. Click ``New Application``.
    3. Name the application appropriately.
    4. Go to the ``Bot`` Section on the left handside.
    5. Click ``Add bot`` And then ``Yes, do it!``.
        - If too many users have this username popped up, Change the bots name.
    6. Go to the ``OAuth2`` Section on the left handside.
    7. Copy ``Client ID``.

    ### Time to invite the bot to the server.
    1. Go to https://discordapi.com/permissions.html
    2. Give ``Administrator`` Permission for bot's full potential.
    3. In the: ``Client ID`` TextBox, Input the client ID you just copied.
    4. Go to the link generated and follow discord's step on inviting the bot.

- Running the bot
    ### REQUIREMENTS:
    - node.js 16.06 (latest, Required). Download at https://nodejs.org/en/download/current. 
    - Visual Studio code (Optional but very recommended). Download at https://code.visualstudio.com. 
    - git Executor (Optional)

    ### CONFIGURING:
    1. Go to https://discord.com/developers again and go to your application and then into the ``bot`` section.
    2. Click ``Copy`` On the Client Token.
    3. Open ``OpenBot_master/Client/Tokens/README.js``.
    4. Change ``YOURTOKENHERE`` to the token you just copied (IMPORTANT)
    5. Rename the file to ``DiscordToken.js`` (IMPORTANT)

    ### RUNNING: 
    - Linux
    1. Copy the code from github and unpack the .tar.gz file contents
    2. Copy the current directory of the folder by right clicking then clicking ``Copy folder path``.
    3. Open Xterm or Terminal and type: ```cd The_Path_You_Copied```
    4. Press enter
    5. Then enter ```node .```, then the bot should start up!

    - Windows
    1. Copy the code from github and unpack the .zip file contents
    2. Copy the current directory of the folder by right clicking then clicking ``Copy as path``.
    3. Open CMD and type: ```cd The_Path_You_Copied```
    4. Press enter
    5. Then enter ```node .```, then the bot should start up!
    



