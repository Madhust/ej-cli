import {ShellExec} from './shell-exec';
import {ArgumentParser} from './argument-parser';
import {Args} from './application';

export /**
 * EjCli
 */
class EjCli {
    opts:Args;
    shell: ShellExec;
    constructor(parameters) {
       this.opts  = new ArgumentParser(process.argv).option;
       this.shell = new ShellExec(); 
    }
    
    performAction(){
        if(this.opts.version != null){
            console.log(this.opts.version);
            return;
        }
        if(this.opts.createEmpty){            
             this.shell.createProject(this.opts.projectName, this.opts.ejVersion, this.opts.controList);
             return;
        }
        if(this.opts.controList.length != 0){
             console.log(this.opts.controList);
             return;
        }
        if(this.opts.getEjVersion){
             console.log(this.opts.ejVersion);
             return;
        }
    }
}