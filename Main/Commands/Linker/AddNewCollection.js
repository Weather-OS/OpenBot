var fs = require('fs');

function AddCollection(collection){
    try {
        const CollectionCommands = fs.readdirSync('./Main/Commands').filter(file => file = `${collection}.js`);
        return true;
    } catch(e){
        console.log(`AddNewCollection.js: No Specific collection named ${collection} Was found or collection empty`);
        return false;
    }
}

module.exports = { AddCollection };