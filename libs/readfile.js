import { log } from "node:console";
import { readFile } from "node:fs";
import { dirname, join } from "node:path"
import {fileURLToPath} from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);

const fileRead = (path,yourFun =(d)=>{/*log(d)*/}/*yourFun is annonimus function*/) => {
  readFile(join(__dirname,`../${path}`/*give the path*/),{encoding:"utf-8"},(err,data)=>{
    if(err){
      log(err);
    }
    else if(data)
    {
      yourFun(data);
      //log(join(__dirname,"../read.txt"));
    }
  });
};
export default fileRead;        //fileRead("../read.txt");//---------in this case fileRead(../read.txt) function reuse again and again , 
                                // when we use the file path join(__dirname,"../read.txt") 
                                // const fileRead = () => {
                                //   readFile(join(__dirname,../read.txt),{encoding:"utf-8"},(err,data)=>{
                                //     if(err){
                                //       log(err);
                                //     }
                                //     else if(data)
                                //     {
                                //       log(data);
                                //       //log(join(__dirname,"../read.txt"));
                                //     }
                                //   });
                                // };
                                // fileRead();
                                // the fileRead() function cant use again and again because the file path is fixed so we use the join(__dirname,path)  and give the path for fileRead(../read.txt) function



  