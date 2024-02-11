// https://youtu.be/CgEZYq7A9xU?si=FZVxYCvgiCZRPw4f (video 7)

const fs = require("fs");

fs.writeFile("read.txt","hello", (err) =>
{
    console.log("file created/overwritten");
    console.log(err);
});