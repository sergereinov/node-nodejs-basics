/*
    Task:
        implement function that deletes file 'fileToRemove.txt'
        (if there's no file 'fileToRemove.txt' Error with message 'FS operation failed' must be thrown)
*/

import { rm } from 'node:fs/promises';

const remove = async () => {
    rm(new URL('./files/fileToRemove.txt', import.meta.url))
        .catch(() => {
            throw new Error("FS operation failed");
        });

};

await remove();
