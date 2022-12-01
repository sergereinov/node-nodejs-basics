/*
    Task:
        implement function that prints content of the 'fileToRead.txt' into console
        (if there's no file 'fileToRead.txt' Error with message 'FS operation failed' must be thrown)
*/

import { readFile } from 'node:fs/promises';

const read = async () => {
    readFile(new URL('./files/fileToRead.txt', import.meta.url), 'utf8')
        .then(console.log)
        .catch(() => {
            throw new Error("FS operation failed");
        })
};

await read();
