#!/usr/bin/env node

var ejcli = require("./ej-cli.js");

(function Ej_Cli(ejcli) {
    
    var e = new ejcli.EjCli();
    
    e.performAction();
     
})(ejcli);