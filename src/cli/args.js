/*
    Task:
        implement function that parses command line arguments
        (given in format '--propName value --prop2Name value2', you don't need to validate it)
        and prints them to the console in the format 'propName is value, prop2Name is value2'
*/

import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2);

    const pairs = Array.from(
        { length: args.length / 2 },
        (_, i) => [args[i * 2].substring(2), args[i * 2 + 1]]
    );

    console.log(pairs.map(e => e.join(' is ')).join(', '));
};

parseArgs();
