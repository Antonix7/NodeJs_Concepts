// os es un ejemplo de los muchos modules propios de NodeJs disponibles

const os = require('os');

console.log(os.userInfo());
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})