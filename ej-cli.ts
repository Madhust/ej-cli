import {ShellExec} from './shell-exec';
import {ArgumentParser} from './argument-parser';
import {TemplateRenderer} from './template-renderer';
import {Args} from './application';

export /**
 * EjCli
 */
class EjCli {
    opts:Args;
    shell: ShellExec;
    template: TemplateRenderer;
    args: ArgumentParser;
    constructor(parameters) {
       this.args  = new ArgumentParser(process.argv)
       this.opts = this.args.option;        
       this.template = new TemplateRenderer(this.args);
       this.shell = new ShellExec(this.template);
    }
    
    performAction(){
        if(this.opts.version != null){
            console.log(this.opts.version);
            return;
        }
        if(this.opts.createEmpty){            
             this.shell.checkEJLocation(this.opts.projectName, this.opts.ejVersion, this.opts.controList);
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