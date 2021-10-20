function TestIfCommandExists(Command, Message, Args){
    //TESTING COLLECTION
    const { AddCollection } = require('./AddNewCollection.js');
    var TestBool = AddCollection(Message.content);
    //TESTING COMMANDS
    
    const TestCommand = require('./Command.js');
    TestCommand.CommandExists(Command, Message, Args);

    
}
module.exports = { TestIfCommandExists };