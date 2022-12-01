/*
    Task:
        implement function that reads data from 'process.stdin',
        reverses text using Transform Stream and then writes it into 'process.stdout'
*/

import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },
    });

    stdin.pipe(reverse).pipe(stdout);
};

await transform();
