/// <reference path="tds/node.d.ts" />

import child_process = require("child_process");
import {INSTALLED_LOCATION, PRO_BAT} from './application';
import {TemplateRenderer} from './template-renderer';

export class ShellExec {
    template: TemplateRenderer;
    constructor(private tmpl: TemplateRenderer){             
      this.template = tmpl;
    }
    
    createProject(name: string, version?: string, controlList?: Array<string>){
        child_process.exec(INSTALLED_LOCATION + '\\bash_scripts\\' + PRO_BAT + ' '+ name + ' ' + version, (err, stdout, stderr)=>{
            if(err){
                console.log(err);
                return;
            }
            this.template.renderIndex();
            console.log(stdout);            
        });       
    }
}