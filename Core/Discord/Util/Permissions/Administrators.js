const fs = require('fs');
var AdminRoles;
var AdminRolesID = ["EMPTY"];

try {
    const data = fs.readFileSync('./Settings/AdminRoleNames.txt', 'utf8');
    AdminRoles = data.replace("\r", "").split("\n");
  } catch (err) {
    console.error(err);
}

function GetAdminRolesID(message){
  for (var i = 0; i < AdminRoles.length; i++){
    AdminRolesID[i] = message.guild.roles.cache.find(r => r.name == AdminRoles[i]);
    if (AdminRolesID[i]){
      AdminRolesID[i] = AdminRolesID[i].id;
    }
  }
  return AdminRolesID;
}
module.exports = { AdminRoles, GetAdminRolesID };