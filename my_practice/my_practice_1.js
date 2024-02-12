/*

console.log("error print");

// while -loop (not part of video)
x = 1;
while (x<10)
{
    console.log(`x value: ${x}`);
    x++;
}


x=1;
do {
    console.log(x);
    x++;
} while (x<=10);

const print_name = (name) => {
    console.log(`The name entered is ${name}.`);
};

print_name("Jitendra Nayak");


// factorial funtion
return_factorial = (num) => {
    if (num==0 || num==1) {
        console.log(`Factorial of ${num} is 1.`);
    } else if  (num<0){
        console.log("Negative numbers do not have factorials !!");
    } else {
        factorial = 1;
        new_num = num;
        while (new_num>0) {
            factorial = factorial * new_num;
            new_num --;
        };
        console.log(`Factorial of ${num} is ${factorial}.`)
    };
};

return_factorial(-2);
return_factorial(-1);
return_factorial(0);
return_factorial(1);
return_factorial(2);
return_factorial(3);
return_factorial(4);
return_factorial(5);
return_factorial(10);


// factorial function using recursion
recursive_function = (num) => {
    if (num == 1 || num == 0) {
        return 1;
    } else if (num<0) {
            return "Negative nos. don't have fatorials!!";
    } else {
        return num*recursive_function(num-1);
    };
};
console.log("Recursive function:");
console.log(`-2: ${recursive_function(-2)}`);
console.log(`-1: ${recursive_function(-1)}`);
console.log(`0: ${recursive_function(0)}`);
console.log(`1: ${recursive_function(1)}`);
console.log(`2: ${recursive_function(2)}`);
console.log(`3: ${recursive_function(3)}`);
console.log(`4: ${recursive_function(4)}`);
console.log(`5: ${recursive_function(5)}`);
console.log(`10: ${recursive_function(10)}`);

const fs = require("fs");

fs.writeFileSync("read.txt","Hello.");
fs.writeFileSync("read.txt","Hi.");
fs.appendFileSync("read.txt"," How are you today?");

console.log("append done");

if (!fs.existsSync("thapa")) {
    fs.mkdirSync("thapa")
};

console.log("dir creation check done !!");

fs.renameSync("read.txt", "thapa/new_name.txt");

console.log("move and rename done !!");

console.log (fs.readFileSync("thapa/new_name.txt"));

console.log (fs.readFileSync("thapa/new_name.txt", "utf8"));

// fs.unlinkSync("thapa/new_name.txt");
// fs.rmdirSync("thapa");

fs_extra = require("fs-extra");

fs_extra.remove("thapa");



if (fs.existsSync("Thapa")) {
    console.log("Directory exists !!");
    fs.writeFile("Thapa/bio.txt","Hello, I am Jitendra.", (write_err) => {
        console.log("file written !!");
        fs.appendFile("bio.txt"," Kaisan ba?", (append_err) => {
            console.log("appended");
            fs.rename("Thapa/bio.txt","myBio.txt", (rename_err) => {
                console.log("file moved and renamed !!");
                fs.readFile("myBio.txt","utf8", (read_err, data) => {
                    console.log(`data read: ${data}`);
                    fs.unlink("myBio.txt", (file_del_error) => {
                        console.log("deleted successfully !!");
                        fs.rmdir("Thapa", (dir_del_err) => {
                            console.log("directory removed now !!");
                        });
                    });
                });
            });

        });
    });
} else {
    fs.mkdir("Thapa", (dir_err) => {
        console.log("Directory created !!");
        fs.writeFile("Thapa/bio.txt","Hello, I am Jitendra.", (write_err) => {
            console.log("file written !!");
            fs.appendFile("bio.txt"," Kaisan ba?", (append_err) => {
                console.log("appended");
                fs.rename("Thapa/bio.txt","myBio.txt", (rename_err) => {
                    console.log("file moved and renamed !!");
                    fs.readFile("myBio.txt","utf8", (read_err, data) => {
                        console.log(`data read: ${data}`);
                        fs.unlink("myBio.txt", (file_del_error) => {
                            console.log("deleted successfully !!");
                            fs.rmdir("Thapa", (dir_del_err) => {
                                console.log("directory removed now !!");
                            });
                        });
                    });
                });
    
            });
        });
    });
};



const os = require("os");

console.log(`Free RAM : ${os.freemem()/(1024*1024*1024)} GB`);
console.log(`Total RAM: ${os.totalmem()/(1024*1024*1024)} GB`);
console.log("After Deciaml rounding:");
console.log(`Free RAM : ${(os.freemem()/(1024*1024*1024)).toFixed(2)} GB`);
console.log(`Total RAM: ${(os.totalmem()/(1024*1024*1024)).toFixed(2)} GB`);

console.log("\nSystem Specs:");
console.log(`Host Name: ${os.hostname()}`);
console.log(`Host os: ${os.type()}`);
console.log(`Host architectire: ${os.arch()}`);
console.log(`Host platform: ${os.platform()}`);
console.log(`Host temp_folder: ${os.tmpdir()}`);


const path = require("path");

console.log(path.dirname("/home/ubuntu"));
console.log(path.dirname("/home/ubuntu/"));
console.log(path.dirname("/home/ubuntu/temp.txt"));

console.log(path.extname("/home/ubuntu"));
console.log(path.extname("/home/ubuntu/"));
console.log(path.extname("/home/ubuntu/temp.txt"));

console.log(path.basename("/home/ubuntu"));
console.log(path.basename("/home/ubuntu/"));
console.log(path.basename("/home/ubuntu/temp.txt"));
*/
