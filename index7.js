// https://youtu.be/CgEZYq7A9xU?si=FZVxYCvgiCZRPw4f (video 7)

const fs = require("fs");

fs.writeFile("read.txt","Hello.", (err) =>
{
    console.log("file created/overwritten");
    console.log(err);
});


fs.appendFile("read.txt"," Jitendra this side.", (err) =>
{
    console.log("Lines appended!!");
    console.log(err);
})


// In Node.js, file system operations like writeFile and appendFile are asynchronous, meaning they
// don't block the execution of subsequent code. When you call both writeFile and appendFile in your
// code, Node.js starts both operations, but there's no guarantee about the order in which they will complete.

// The order in which the callback functions are executed depends on the speed at which each operation
// completes. Since both operations are asynchronous and may take different amounts of time to complete,
// the callback for appendFile may execute before the callback for writeFile, or vice versa.

// In my case, it just happened that the callback for appendFile executed before the callback for
// writeFile, resulting in the output showing the message from appendFile first and then from writeFile.



data_buf = fs.readFile("read.txt", (err, buf_data) =>
{
    console.log(buf_data);
    console.log(err);
}
);

data_buf = fs.readFile("read.txt", "utf8", (err, buf_data) =>
{
    console.log(buf_data);
    console.log(err);
}
);

data_buf = fs.readFile("read.txt", "UTF8", (err, data) =>
{
    console.log(data);
    console.log(err);
}
);

data_buf = fs.readFile("read.txt", "utf-8", (err, data) =>
{
    console.log(data);
    console.log(err);
}
);

data_buf = fs.readFile("read.txt", "UTF-8", (err, data) =>
{
    console.log(data);
    console.log(err);
}
);
