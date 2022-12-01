/*
    Task:
        implement function that renames file 'wrongFilename.txt' to 'properFilename'
        with extension '.md'
        (if there's no file 'wrongFilename.txt' or 'properFilename.md' already exists
        Error with message 'FS operation failed' must be thrown)
*/

import { rename as renameFile, stat } from 'node:fs/promises';

const rename = async () => {
    const wrongFile = new URL('./files/wrongFilename.txt', import.meta.url);
    const properFile = new URL('./files/properFilename.md', import.meta.url);

    stat(properFile)
        .then(
            () => { throw new Error("FS operation failed"); },
            () => renameFile(
                wrongFile,
                properFile
            )
        )
        .catch(() => {
            throw new Error("FS operation failed");
        });
};

await rename();
