import { readFile } from 'node:fs';
import moment from 'moment';

var chLang = process.argv[2];
var lgFile = `./greeting_${chLang}.js`;

import(lgFile)
.then(({default: result}) => console.log(result))
.catch(e => {
    if (e instanceof Error && e.code === "ERR_MODULE_NOT_FOUND") {
        console.log("Specified language not found");
    } else {
        console.log("Unknown error");
    }
  }
);