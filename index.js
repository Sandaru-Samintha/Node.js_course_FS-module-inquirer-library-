import fileRead from "./libs/readfile.js";
import fileWrite from "./libs/writefile.js";
import {log} from "node:console";
import inquirer from "inquirer";


//------ 1 -----

// these are the object of prompt package prompt package get in the inquirer library
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





//------- 2 ---------
//let a =true;

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

//-----   3   ----------

// const myFunction =async ()=>{
//   do{
//     const data = await inquirer.prompt([
//       {
//         type:"input",
//         name:"username",
//         message:"enter your username: ",
//       },
//       {
//         type:"confirm",
//         name:"check",
//         message:"Have other values : ",
//       },
//     ])
//     log(data)
//     if(!data.check)
//       {
//         a=false;
//       }
//   }while(a);
//   };

// myFunction();          //we can use myFunction() call bottom like this

                          /*(async ()=>{

                            })();*/

//----- 4 ------
const studentInfor =[];

( async ()=>{
  do{
    const data = await inquirer.prompt([
      {
        type:"input",
        name:"name",
        message:"Enter Student Name : ",
      },
      {
        type:"number",
        name:"age",
        message:"Enter Student Age : ",
      },
      {
        type:"checkbox",
        name:"gender",
        message:"Enter Student Gender : ",
        choices:['male','female'],
      },
      {
        type:"input",
        name:"city",
        message:"Enter Student City : ",
      },
      {
        type:"list",
        name:"class",
        message:"Enter Student Class : ",
        choices:['class1','class2','class3','class4'],
      },
      {
        type:"checkbox",
        name:"subject",
        message:"Enter Student Subject: ",
        choices:['java','javascript','python','dart'],
      },
      {
        type:"confirm",
        name:"check",
        message:"Have more Students : ",
      }
    ]);

    //log(data);

    const {check,...infor}=data  //in this case the check information is not use so we can remove using this method destructured.

    studentInfor.push(infor);// the information are push in to the array of studentInfor
    
    if(!data.check){
      break;
    }
  }while(true);
  log(studentInfor);
})();