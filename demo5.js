const fs = require("fs");

fs.readFile("./rohit.md", "utf-8", (err, data) => { // I/O queue -> callback queue
    if(err){
        console.error(err);
        return;
    } 
    console.log(data);
});

// process.nextTick(()=>console.log('Next Tick'));
setTimeout(()=>{console.log("Timer 1")},0)