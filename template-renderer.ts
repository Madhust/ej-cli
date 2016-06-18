/// <reference path="tds/node.d.ts" />
/// <reference path="tds/pug.d.ts" />

import * as pug from "pug";
import * as files from "fs";
import {INSTALLED_LOCATION, PUG_OPTIONS, PUG_DATA} from './application';
import {ArgumentParser} from './argument-parser';

export /**
 * TemplateRenderer
 */
class TemplateRenderer {
    
    compiled: Function;
    result: string;  
    data: { [d:string]: any } = {};  
    constructor(public parser: ArgumentParser) {         
         this.compile();         
    }
    renderIndex(){
       this.generateData(PUG_DATA);    
       this.result = this.compiled(this.data);     
       this.writeFile();   
    }
    compile(){
        this.compiled = pug.compileFile(INSTALLED_LOCATION + '\\templates\\web.pug', PUG_OPTIONS);   
    }
    writeFile(){
       files.writeFile(this.parser.option.projectName + "\\index.html", this.result, (err) => {
          if(err){
              console.log(err);
          }
          console.log(this.data);
          console.log("Sample created successfully");
       });
    }
    generateData(source: any){
        this.data["version"] = this.parser.option.ejVersion;
        for(var prop in source){
            this.data[prop] = source[prop];
        }
    }

} 