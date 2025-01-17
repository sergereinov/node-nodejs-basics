import * as path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import * as _ from './files/c.js';
import { readFile } from 'node:fs/promises';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)));
} else {
    unknownObject = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

