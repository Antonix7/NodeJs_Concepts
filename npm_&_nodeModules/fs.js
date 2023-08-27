const fs = require('fs');

/*const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');
const third = fs.readFileSync('./data/third.txt');
const newFile = fs.readFileSync('./data/newFile1.txt');

console.log(first);
console.log(second.toString());
console.log(third.toString());
console.log(newFile.toString())

// Si se ejecuta lo siguiente simplemente se va sobreescribir el archivo
const conten = 'This is a text from new file created, ';
// fs.writeFileSync('./data/newfile1.txt', conten);

// Si se quiere añadir texto al mismo archivo y no sobreescribirlo
// se hace de la siguiente manera
const newConten = "- this is a more text added -"
fs.writeFileSync('./data/newfile1.txt', newConten, {
    flag: 'a'
});
*/

// a diferencia de los metodos Sync, la siguiente manera trabaja de forma Async 
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    console.log('finish');
    
    if(error){
        console.log(error);
    }
    console.log(data);

    fs.writeFile('./data/newFile2.txt', 'File created, with fs Async', (error, data) =>{
        if(error){
            console.log(error);
        }
        console.log(data);
    });
})