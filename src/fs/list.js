/*
    Task:
         implement function that prints all array of filenames from 'files' folder into console
         (if 'files' folder doesn't exists Error with message 'FS operation failed' must be thrown)
*/

import { readdir } from 'node:fs/promises';

const list = async () => {
    readdir(new URL('./files', import.meta.url))
        .then(console.log)
        .catch(() => {
            throw new Error("FS operation failed");
        })
};

await list();
