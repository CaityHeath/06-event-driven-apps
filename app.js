'use strict';

const fs = require('fs');
const util = require('util');

let read = util.promisify(fs.readFile);
let write = util.promisify(fs.writeFile);


let file = process.argv.slice(2).shift();



const alterFile = (file) => {
  read(file)
    .then( (data) => {
      let text = data.toString().toUpperCase();
      write(file, Buffer.from(text))
        .then((text) => {
          console.log(`${file} saved`);
        })
        .catch(console.error);
    });
};
alterFile(file);