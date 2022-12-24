/*
    Task:
        implement function that creates new file 'fresh.txt' with content
        'I am fresh and young' inside of the 'files' folder
        (if file already exists Error with message 'FS operation failed' must be thrown)
*/

import { open } from 'node:fs/promises';

const create = async () => {
    open(new URL('./files/fresh.txt', import.meta.url), 'wx')
        .then(filehandle => filehandle.writeFile('I am fresh and young'))
        .catch(() => {
            throw new Error("FS operation failed");
        })
};

await create();
