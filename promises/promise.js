const {readFile} = require('fs');

const {promisify} = require('util')

const readFilePromise = promisify(readFile)

/*
const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })    
}
*/
/*getText('./data/first.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/second.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/

const read = async () => {
    try {
        const result = await readFilePromise('./data/first.txt', 'utf-8')
        const result2 = await readFilePromise('./data/second.txt', 'utf-8')
        const result3 = await readFilePromise('./data/third.txt', 'utf-8')
        console.log(result)
        console.log(result2)
        console.log(result3)
    } catch (error) {
        console.log(error)
    }
}
read();
