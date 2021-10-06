const fs = require('fs');
var AdminRoles;

try {
    const data = fs.readFileSync('./Settings/AdminRoleNames.txt', 'utf8');
    AdminRoles = data.replace("\r", "").split("\n");
  } catch (err) {
    console.error(err);
}
module.exports = { AdminRoles };