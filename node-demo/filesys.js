
// file read Write

const fs = require('fs');

const filename = "demo.html";

fs.readFile(filename, 'utf8', (err, data) =>{

if(err){
    console.log(err);
}
console.log(data);

const content="New Text";
fs.writeFile(filename, content, err2 =>{
if(err2){
    console.log(err2);
}
// console.log("saved!");

fs.readFile(filename, 'utf8', (err3, data3) =>{
if (err3){
    console.log(err3);

}
console.log(data3);
});
});
});

// read Append 

const fss = require('fs');

const filename1 = "demo2.html";

fss.readFile(filename1, 'utf8', (err, data) =>{

if(err){
    console.log(err);
}
console.log(data);

const content1="New Text";
fss.appendFile(filename1, content1, err2 =>{
if(err2){
    console.log(err2);
}
// console.log("saved!");

fss.readFile(filename1, 'utf8', (err3, data3) =>{
if (err3){
    console.log(err3);

}
console.log(data3);
});
});
});

// Access check
const check= require('fs');
filecheck="demo2.html";
fs.access(filecheck, err4 =>{
    if (err4){

        console.log("YOu Are Not Authorize to Access The Content");
    }
    console.log("Acces Granted");
});

// Owner Check assign

const check2= require('fs');
filecheck2="demo2.html";
fs.chown(filecheck, 1541, 999, err4 =>{
    if (err4){
        console.log("User not there");
    }
    console.log("uid Gid Add Sucessfully");
});


// const fsdir=require('fs');
// const fspath=require('path');
// fsdir.mkdir(fspath.join(__dirname, 'new2'), err7 => {
//     if(err7){
//         console.log("Error");
//     }
//     console.log("Directory added");


// });


const readf = require('fs');

fs.open('demo.html', 'r', function (err8, f) {
    if (err8){
        console.log('err');
    }
    console.log('Opened!');
});


const fsrp = require('fs');
  
console.log("Current Directory path:",__dirname);
path1= __dirname+"\\..";

fsrp.realpath(path1, (err9, resolved) => {

    if (err9){
        console.log(err9);
    }
    console.log("Current One Directory up "+ resolved);

});


const fsre= require('fs');


getCurrentFilenames();


fsre.rename('htmlnew.txt', 'htmldemo.txt',()=>{
   console.log("FIle REnamed");
});

getCurrentFilenames();

function getCurrentFilenames(){
    fsre.readdirSync(__dirname).forEach( file => {
        console.log(file);
    });
}