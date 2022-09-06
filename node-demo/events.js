var events = require('events');
var eventEmitter= new events.EventEmitter();
eventEmitter.on('speak',function(name){
 console.log(name, "is Speaking")
})

eventEmitter.emit("speak", "Peter");
