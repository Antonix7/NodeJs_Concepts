
console.log(module); // El primero log no mostrara nada exportado

const myWebAdress = "jackscript.com";
const myNumber = 20;
const myArray = [20,'jack', 21];
const user = {
    name: 'jhon',
    lastName: 'permit'
}

const group = {
    myWebAdress: myWebAdress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}

module.exports = group;

// otras formas de exportar

// module.export.user = user;
// module.export.number = myNumber

console.log(module);