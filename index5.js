// https://youtu.be/5uZDLL0zaWg?si=pkj2wg-9B5zS_Mtk (video 5)
// press "tab" twice in REPL (type "node" on command line, then hit "enter" to enter REPL)
// type any of the output of above on REPL and hit "enter" to see related attributes

const fs = require("fs");

fs.writeFileSync ("read.txt", "kya haal hai?");
fs.writeFileSync ("read.txt", "sab badiya?");

fs.writeFileSync ("read.txt", "kya haal hai?");
fs.appendFileSync("read.txt", " sab badiya?");

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

org_data = buf_data.toString()
console.log(`\n ${org_data}`);

fs.renameSync('read.txt','readWrite.txt');
