// https://youtu.be/5E1fqFs2IuQ?si=nY12xuvm0IPPs2d0 (video 9)


const fs = require("fs");

if (fs.existsSync("thapa")) {
    console.log("directory present");
    fs.writeFile("./thapa/bio.txt", "Hello!!", (write_err) => {
        console.log (`write file error: ${write_err}`);
        fs.appendFile("./thapa/bio.txt"," How r u?", (append_err) => {
            console.log(`append error: ${append_err}`);
            fs.readFile("./thapa/bio.txt", "utf8", (read_err, data) => {
                console.log(`file read error: ${read_err}`);
                console.log(`file contents: ${data}`)
                fs.rename("./thapa/bio.txt","./thapa/myBio.txt",(rename_err) => {
                    console.log(`rename error: ${rename_err}`);
                    fs.unlink("./thapa/myBio.txt", (file_delete_error) => {
                        console.log(`file delete error: ${file_delete_error}`);
                        fs.rmdir("./thapa", (dir_delete_error) => {
                            console.log(`dir removal error: ${dir_delete_error}`);
                        });
                    });
                });
            });
        });
    });

} else {
    fs.mkdir("thapa", (dir_err) => {
        console.log("directory created !!");
        console.log(`directory creation error: ${dir_err}`)
        fs.writeFile("./thapa/bio.txt", "Hello!!", (write_err) => {
            console.log (`write file error: ${write_err}`);
            fs.appendFile("./thapa/bio.txt"," How r u?", (append_err) => {
                console.log(`append error: ${append_err}`);
                fs.readFile("./thapa/bio.txt", "utf8", (read_err, data) => {
                    console.log(`file read error: ${read_err}`);
                    console.log(`file contents: ${data}`)
                    fs.rename("./thapa/bio.txt","./thapa/myBio.txt",(rename_err) => {
                        console.log(`rename error: ${rename_err}`);
                        fs.unlink("./thapa/myBio.txt", (file_delete_error) => {
                            console.log(`file delete error: ${file_delete_error}`);
                            fs.rmdir("./thapa", (dir_delete_error) => {
                                console.log(`dir removal error: ${dir_delete_error}`);
                            });
                        });
                    });
                });
            });
        });
    }
    );
};