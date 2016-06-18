/// <reference path="tds/node.d.ts" />

export const PUG_DATA = require("./ejoptions.json");
const pkg  = require('./package.json');

export const INSTALLED_LOCATION = __dirname;

export const EJ_VERSION = pkg.version;

export const PRO_BAT = "project.bat";

export const PUG_OPTIONS:{[x:string]: any } = {
             "pretty": true,
             "cache": true,
             "debug": false,
             "compileDebug": false
}  

export const EJ_SWITCHES_HELP :{[x:string]: any } = {
    "-v": "Returns version",
    "-c": "Create project with given name",
    "-ev": "Specifies the Essential Studio version to be used"
}

export const EJ_SWITCHES :EJ_SWITCHES_Interface = {
     version :"-v",
     create :"-c",
     ejversion :"-ev",
     esversion: "-ejversion",
     listcontrols:"-ls"      
}

interface EJ_SWITCHES_Interface{
    create: string;
    version: string;
    ejversion: string;
    esversion: string;
    listcontrols: string;
}

export interface Args {
    version: string;
    createEmpty: boolean;
    controList: Array<string>;
    projectName: string;
    ejVersion: string;
    getEjVersion: boolean;
}