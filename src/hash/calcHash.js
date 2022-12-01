/*
    Task:
        implement function that calculates SHA256 hash for file 'fileToCalculateHashFor.txt'
        and logs it into console as hex
*/

import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    readFile(new URL('./files/fileToCalculateHashFor.txt', import.meta.url))
        .then(data => {
            const hex = createHash('sha256').update(data).digest('hex');
            console.log(hex);
        });
};

await calculateHash();
