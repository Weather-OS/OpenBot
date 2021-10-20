const glob = require("glob");

var getDirectories = function (src, callback){
    glob(src + '/**/*', callback);
};

module.exports = { getDirectories };