console.log("start");
setTimeout(() => {
    process.nextTick(()=> console.log('Next Tick 2'))
},0); // cb will be waiting in timer queue
Promise.resolve(() => console.log("Promise 1")); //cb will be waiting in microtask queue
process.nextTick(() => console.log("Next Tick 1")); // cb will be waiting in nextTick queue
setTimeout(() => console.log("Timer 2"), 0); // cb will be waiting in timer queue

for (let i = 0; i < 10000000; i++) {} // by the times this loop completed all the callbacks are in their respected queue
console.log("end");
