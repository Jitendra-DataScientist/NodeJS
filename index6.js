// https://youtu.be/0F-nudTm5EU?si=wnmRxYXaH4avUsVg (video 6)

const fs = require("fs");

if (fs.existsSync("Thapa")) {
    console.log ("Thapa directory already exists");
} else {
    fs.mkdirSync("Thapa");
    console.log("Directory created!!");
}


if (!fs.existsSync("Thapa")) {
    fs.mkdirSync("Thapa");
    console.log("Directory created!!");
} else {
    console.log ("Thapa directory already exists");
}


fs.writeFileSync("Thapa/bio.txt","My name is Jitendra.");
fs.appendFileSync("Thapa/bio.txt", " Hello and welcome !!")

data = fs.readFileSync("Thapa/bio.txt", encoding="utf8");
console.log(data);

data = fs.readFileSync("Thapa/bio.txt", "utf8");
console.log(data);

fs.renameSync("Thapa/bio.txt", "Thapa/myBio.txt");

fs.unlinkSync("Thapa/myBio.txt");

fs.rmdirSync("Thapa");

// to force remove a directory (regardless of if it is empty of not)
// npm install fs-extra
const fs_extra = require("fs-extra");
fs_extra.remove("Thapa");
