import fileWrite from "./libs/writefile.js";
import {log} from "node:console";
import inquirer from "inquirer";
import { cardGen } from "./libs/htmlCardGen.js";


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

  let allCards = '';
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
        name:"stuclass",
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
  //log(studentInfor);


  studentInfor.forEach(({name,age,city,gender,stuclass,subject}/*destuctur the element using foreach*/) => {
    allCards+= cardGen(name,age,gender,stuclass,city,subject);
  });

  log(allCards);

  let htmlContent =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student Information</title>
      <link rel="stylesheet" href="index.css"> 
    </head>
    <body>
      <main class="main">
        ${allCards}
      </main>
    </body>
    </html>
  `;
  fileWrite("index.html",htmlContent,(d)=>log(d));
})();





//this should be created in indexedDB.html  like top

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Student Information</title>
//   <link rel="stylesheet" href="index.css">
// </head>
// <body>
//   <main class="main">
//     <div class="card">
//       <h1 class="name">Sandaru</h1>
//       <div class="infor">
//         <div>
//           <p>Age: 24</p>
//           <p>Gender: male</p>
//         </div>
//         <div>
//           <p>City: city</p>
//           <p>Class: Class1</p>
//         </div>
//       </div>
//       <h3>Subjects</h3>
//       <div class="subjects">
//         <p>java</p>
//         <p>javascript</p>
//         <p>golang</p>
//       </div>
//     </div>
//   </main>
// </body>
// </html>