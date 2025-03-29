import fileRead from "./libs/readfile.js";
import fileWrite from "./libs/writefile.js";
import {log} from "node:console";
import inquirer from "inquirer";

inquirer.prompt([
  {
    type:"input",//these are the object of prompt package prompt package get in the inquirer library
    name:"username",
    message:"enter your username: ",
  },
])
.then((data)=>log(data))
.catch((err)=>log(err));







// fileRead("read.txt",/*annonimus function*/(data)=>{
//   log(data);
//   const whatToDo =String(data).split(" ");
//   //log(whatToDo);
//   const connect =whatToDo.slice(4,7).join(" ");
//   //log(connect);
//   const file=whatToDo[whatToDo.length-2];
//   //log(file);
//   const comand = whatToDo[0];
//   //log(command);

//   if(comand==="Hello"){
//     fileWrite(file,connect,(d)=>{log(d)})
//   }

// });

