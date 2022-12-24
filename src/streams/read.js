/*
    Task:
        implement function that reads file 'fileToRead.txt' content using Readable Stream
        and prints it's content into 'process.stdout'
*/

import { open } from 'node:fs/promises';
import { stdout } from 'node:process';

const read = async () => {
    open(new URL('./files/fileToRead.txt', import.meta.url), 'r')
        .then(filehandle => filehandle.createReadStream().pipe(stdout));
};

await read();
