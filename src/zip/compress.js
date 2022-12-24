/*
    Task:
        implement function that compresses file 'fileToCompress.txt' to 'archive.gz'
        using 'zlib' and Streams API
*/

import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    pipeline(
        createReadStream(new URL('./files/fileToCompress.txt', import.meta.url)),
        createGzip(),
        createWriteStream(new URL('./files/archive.gz', import.meta.url)),
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    );
};

await compress();
