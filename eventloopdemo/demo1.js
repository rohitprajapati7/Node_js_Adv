let a = 10;
Promise.resolve().then(() => console.log("Printing from promise"));
process.nextTick(() => console.log("printing from nextTick1"));
process.nextTick(() => console.log("printing from nextTick2"));
process.nextTick(() => console.log("printing from nextTick3"));

setTimeout(() => console.log("printing from timer"), 0);
console.log(a);
