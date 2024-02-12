// https://youtu.be/xrj28wzHxKY?si=JWcFKz6Eix_RV5N0 (video 11)

const path = require("path");

console.log("Dirname:");
console.log(path.dirname("/home/ubuntu"));
console.log(path.dirname("/home/ubuntu/"));
console.log(path.dirname("/home/ubuntu/temp.txt"));

console.log("\nExtname:");
console.log(path.extname("/home/ubuntu/temp.txt"));
console.log(path.extname("/home/ubuntu"));
console.log(path.extname("/home/ubuntu/"));


console.log("\nBasename:");
console.log(path.basename("/home/ubuntu/temp.txt"));
console.log(path.basename("/home/ubuntu"));
console.log(path.basename("/home/ubuntu/"));


console.log("\nParse:\n");
console.log(path.parse("/home/ubuntu/temp.txt"));
console.log(path.parse("/home/ubuntu"));
console.log(path.parse("/home/ubuntu/"));
console.log(path.parse("C:/home/ubuntu/temp.txt"));
console.log(path.parse("C:/home/ubuntu"));
console.log(path.parse("C:/home/ubuntu/"));

console.log("\nCalling specific attributes:");
my_path = path.parse("C:/home/ubuntu/temp.txt");
console.log(`root: ${my_path.root}`);
console.log(`name: ${my_path.name}`);
console.log(`ext: ${my_path.ext}`);
console.log(`base: ${my_path.base}`);
console.log(`dir: ${my_path.dir}`);
