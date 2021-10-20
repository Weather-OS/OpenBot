var fs = require('fs');

function AddCollection(collection){
    try {
        const CollectionCommands = fs.readdirSync('./Main/Commands').filter(file => file = `${collection}.js`);
        return true;
    } catch(e){
        return false;
    }
}

module.exports = { AddCollection };