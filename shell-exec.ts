/// <reference path="tds/node.d.ts" />

import * as child_process from 'child_process';
import {INSTALLED_LOCATION, PRO_BAT, EJ_LOCATION, PUG_DATA} from './application';
import {TemplateRenderer} from './template-renderer';
import * as fs from 'fs';
import * as rd from 'readline';

export class ShellExec {
    template: TemplateRenderer;
    name: string;
    constructor(private tmpl: TemplateRenderer) {
        this.template = tmpl;
    }

    createProject(name: string, version?: string, controlList?: Array<string>) {
        let spwn = child_process.spawn("cmd.exe", ['/c', INSTALLED_LOCATION + '\\bash_scripts\\' + PRO_BAT, name, version]);

        spwn.stdout.on("data", (data) => {
            console.log(data.toString());
        });

        spwn.stderr.on("data", (data) => {
            console.log(data.toString());
        });

        spwn.on('exit', (code) => {
            if (code == 0)
                this.template.renderIndex();
            else
                console.log(`Child exited with code ${code}`);
        });
    }

    checkEJLocation(name: string, version?: string, controlList?: Array<string>): void {
        this.name = name;
        if (PUG_DATA.useCDN) {
            this.renderWithCDN()
            return;
        }

        fs.access(EJ_LOCATION + version, (err) => {
            if (err) {
                var rl = rd.createInterface(process.stdin, process.stdout);
                rl.question(`The ${version} is not installed in your machine do you wish to use CDN(yes/no)?`, (ans) => {
                    ans = ans.toLowerCase();
                    if (ans == "yes" || ans == "y") {
                        this.renderWithCDN();
                    }
                    else
                        process.exit();
                    rl.close();
                });
                return;
            }
            this.createProject(name, version, controlList);
        });
    }
    renderWithCDN() {
        this.template.cdn = true;
        fs.mkdir(this.name, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            this.template.renderIndex();
        });        
    }
}