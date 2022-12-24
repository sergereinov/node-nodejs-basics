/*
    Task:
        implement function that copies folder 'files' files with all its content into folder
        'files_copy' at the same level
        (if 'files' folder doesn't exists or 'files_copy' has already been created Error with
        message 'FS operation failed' must be thrown)
*/

import { mkdir, readdir, copyFile } from 'node:fs/promises';

const copy = async () => {
    const filesUrl = new URL('./files/', import.meta.url)
    const filesCopyUrl = new URL('./files_copy/', import.meta.url)

    mkdir(filesCopyUrl)
        .then(() => readdir(filesUrl))
        .then(files => Promise.all(
            files.map(filename => copyFile(
                new URL(filename, filesUrl),
                new URL(filename, filesCopyUrl)
            )))
        )
        .catch((err) => {
            throw new Error("FS operation failed");
        })
};

copy();
