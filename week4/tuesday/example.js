const fs = require('fs');

const path = require('path');

const wordCountSyc = (file) => {
    //can run in any location
    const absPath = path.resolve(__dirname, './files', file);
    try {
        const result = fs.readFileSync(absPath, 'utf-8');
        const wordArray = result.split(' ');
        const wordCount = wordArray.length;
        console.log(`Sync: ${file} | ${wordCount}`);
    } catch (error) {
        console.log(error);
    }
};

const wordCountAsync = (file) => {
    const absPath = path.resolve(__dirname, './files', file);
    const start = Date.now();
    fs.readFile(absPath, 'utf-8', (err, result) => {
        if (!err) {
            const end = Date.now();
            const wordArray = result.split(' ');
            const wordCount = wordArray.length;
            console.log(
                `Async: Took ${end - start}ms to read ${file} | ${wordCount}`
            );
        } else {
            console.log(err);
        }
    });
};

const getWordCountSync = () => {
    wordCountAsync('medium.txt');
    wordCountAsync('small.txt');
    // wordCountSyc('small.txt');
    // console.log(`Sync took: ${end - start} ms to read both file`);
};

getWordCountSync();
