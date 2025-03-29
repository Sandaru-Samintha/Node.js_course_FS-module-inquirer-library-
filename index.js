import fileRead from "./libs/readfile.js";
import fileWrite from "./libs/writefile.js";
import {log} from "node:console";
import inquirer from "inquirer";


let a =true;

// do{

//   inquirer.prompt([
//     {
//       type:"input",
//       name:"username",
//       message:"enter your username: ",
//     },
//     { 
//       type:"confirm",
//       name:"check",
//       message:"Have other values : ",
//     },
//   ])
//   .then(
//     (data)=>{log(data)
//     if(!data.check)/*data.check the name=check is select y/n the user is select n a result is change the false */{
//       a=false;
//     }
// })
//   .catch((err)=>log(err));

// }while(a); // when we using this way looping not stop because .then is a async and not check if condition  when checking while loop and infinite looping

//so use async and await method for hold 

const myFunction =async ()=>{
  do{
    const data = await inquirer.prompt([
      {
        type:"input",
        name:"username",
        message:"enter your username: ",
      },
      { 
        type:"confirm",
        name:"check",
        message:"Have other values : ",
      },
    ])
    log(data)
    if(!data.check)
      {
        a=false;
      }
  }while(a);
  };



myFunction();




//these are the object of prompt package prompt package get in the inquirer library
// inquirer.prompt([
//   {
//     //type:"input",
//     //type:"list",        //when we use the type for list can use multiple values by using choices & use type for input can use only one value
//     //type:"rawlist",     //using rawlis for type can use number and input the number the name is print
//     //type:"checkbox",
//     //type:"confirm",
//     type:"password",
//     name:"username",
//     message:"enter your username: ",
//     mask:"*",  //when using mask the type using for password the typing shows as a * and not print typing things
//     choices:["Sandaru","Satharaka","Pasindu"],
//   },
// ]) 
// .then((data)=>log(data))
// .catch((err)=>log(err));







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

