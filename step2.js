"use strict";

const argv = process.argv;

const fsP = require('fs/promises');

/**
 * Function cat takes in a file "file", reads the file and prints the contents.
 *
 * Handles error when file doesn't exist.
 */

async function cat(file) {
  try {
    let contents = await fsP.readFile(`${file}`, "utf8");
    console.log(contents);
  }
  catch (err) {
    console.log(`ENOENT: no such file or directory, open '${file}'`)
    process.exit(1);
  }
}


/**
 * webCat: takes an url; reads content of url and prints to console.
 *
 * Handles error when url doesn't exist or there's an error getting to page.
 */

async function webCat(url) {

  try {
    const resp = await fetch(url);
    // console.log('This is resp', resp);

    const text = await resp.text();
    console.log(text);
  }
  catch (err) {
  // catch (TypeError) {
    console.log(`Error fetching ${url}`);
    // TODO: consider console.log(err);
    process.exit(1);
  }
}


try {
  const url = new URL(argv[2]);
  webCat(url);
}
catch {
  cat(argv[2]);
}
// TODO: consider this into a fn instead, and then call fn