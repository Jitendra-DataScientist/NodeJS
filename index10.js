// https://youtu.be/tFKzxizRkfY?si=zsfyc2ydnI-iHqbb (video 10)


const os = require("os");

console.log(`Host Architecture: ${os.arch()}`);
console.log(`Host Name: ${os.hostname()}`);
console.log(`Host Platform: ${os.platform()}`);
console.log(`temp folder path: ${os.tmpdir()}`);
console.log(`Host OS: ${os.type()}`);

free_RAM_bytes = os.freemem();
console.log(`free RAM in GB: ${free_RAM_bytes/(1024*1024*1024)}`);

total_RAM_bytes = os.totalmem();
console.log(`total RAM in GB: ${total_RAM_bytes/(1024*1024*1024)}`);
