const fs = require('fs');
var ModeratorRoles;
var ModeratorRolesID = ["EMPTY"];

try {
    const data = fs.readFileSync('./Settings/ModRoleNames.txt', 'utf8');
    ModeratorRoles = data.replace("\r", "").split("\n");
  } catch (err) {
    console.error(err);
}

function GetModeratorRolesID(message){
  for (var i = 0; i < ModeratorRoles.length; i++){
    ModeratorRolesID[i] = message.guild.roles.cache.find(r => r.name == ModeratorRoles[i]);
    if (ModeratorRolesID[i]){
      ModeratorRolesID[i] = ModeratorRolesID[i].id;
    }
  }
  return ModeratorRolesID;
}
module.exports = { ModeratorRoles, GetModeratorRolesID };