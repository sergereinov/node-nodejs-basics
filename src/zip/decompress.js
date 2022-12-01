/*
    Task:
        implement function that decompresses 'archive.gz' back to the 'fileToCompress.txt'
        with same content as before compression using 'zlib' and Streams API
*/

import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    pipeline(
        createReadStream(new URL('./files/archive.gz', import.meta.url)),
        createGunzip(),
        createWriteStream(new URL('./files/fileToCompress.txt', import.meta.url)),
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    );
};

await decompress();
