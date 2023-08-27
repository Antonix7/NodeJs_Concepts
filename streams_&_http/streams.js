const { writeFile } = require('fs/promises');
const { createReadStream } = require('fs');
/*
const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'This is text in a big file'.repeat(1000))
}

createBigFile()
*/
const stream = createReadStream('./data/bigFile.txt', 'utf-8')

stream.on('data', (chunk) => {
    console.log(chunk)
})
