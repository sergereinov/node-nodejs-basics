/*
    Task:
        implement function that writes 'process.stdin' data into file 'fileToWrite.txt' content
        using Writable Stream
*/

import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    stdin.pipe(
        createWriteStream(new URL('./files/fileToWrite.txt', import.meta.url))
    );
};

await write();
