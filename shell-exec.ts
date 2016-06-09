/// <reference path="tds/node.d.ts" />

import child_process = require("child_process");
import {INSTALLED_LOCATION, PRO_BAT} from './application';

export class ShellExec {
    
    constructor(){             
    }
    
    createProject(name: string, version?: string, controlList?: Array<string>){
        child_process.exec(INSTALLED_LOCATION + '\\bash_scripts\\' + PRO_BAT + ' '+ name + ' ' + version, (err, stdout, stderr)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(stdout);            
        });       
    }
}