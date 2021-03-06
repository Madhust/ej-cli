/// <reference path="tds/node.d.ts" />

import {EJ_SWITCHES, EJ_VERSION, Args} from './application';

export /**
 * ArgumentParser
 */
class ArgumentParser {
    option: Args;
    actual: Array<string>;
    constructor(parameters: Array<string>) {
        this.actual = parameters.slice(2);
        this.updateArgs();
    }
    
    updateArgs(){
        var ix = this.actual.indexOf(EJ_SWITCHES.listcontrols);
        var cInx = this.actual.indexOf(EJ_SWITCHES.create);
        var evx = this.actual.indexOf(EJ_SWITCHES.ejversion);
        var ev = this.actual.indexOf(EJ_SWITCHES.esversion);        
        this.option = {
            version: this.actual.indexOf(EJ_SWITCHES.version) > -1 ? EJ_VERSION : null, 
            createEmpty: cInx > -1,
            projectName: this.actual[cInx + 1],
            controList:  ix > -1 ? this.actual[ix+1].split(",") : [],
            ejVersion: evx > -1 ? this.actual[evx + 1] : "14.1.0.16",
            getEjVersion: ev > -1
        }     
    }
}