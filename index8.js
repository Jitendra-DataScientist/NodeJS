// https://youtu.be/rDsR1SRQwxE?si=cJ29tIe3Ftkb2aQw (video 8)

const fs = require("fs");

data = fs.readFileSync("read.txt","utf8")
console.log(data," sync");


fs.readFile("read.txt", "utf8", (err, data) =>
{
    console.log(data, " Async");
})

console.log("This line gets printed before Async!!");