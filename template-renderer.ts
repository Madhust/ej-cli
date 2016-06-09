/// <reference path="tds/node.d.ts" />
/// <reference path="tds/pug.d.ts" />

import pug = require("pug");
import {INSTALLED_LOCATION, PUG_OPTIONS} from './application';

export /**
 * TemplateRenderer
 */
class TemplateRenderer {
    
    compiled: Function;
    constructor() {   
        this.compiled = pug.compileFile(INSTALLED_LOCATION + '\\templates\\web.pug', PUG_OPTIONS);     
    }
    renderIndex(){
        
    }
    compile(){
       
    }
} 