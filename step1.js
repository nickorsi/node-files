"use strict";

const argv = process.argv;

const fsP = require('fs/promises');

/** Function cat takes in a file "file", reads the file and prints the contents. */

async function cat(file) {
  try {
    let contents = await fsP.readFile(`${file}`, "utf8");
    console.log(contents);
    // TODO: consider having console.log outside of try/catch (end of fn)
  }
  catch (err) {
    console.log(`ENOENT: no such file or directory, open '${file}'`)
    process.exit(1);
  }
}

cat(argv[2]);