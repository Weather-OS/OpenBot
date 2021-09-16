const fs = require('fs');
var ModeratorRoles;

try {
    const data = fs.readFileSync('./Settings/ModRoleNames.txt', 'utf8');
    ModeratorRoles = data.replace("\r", "").split("\n");
  } catch (err) {
    console.error(err);
}
module.exports = { ModeratorRoles };