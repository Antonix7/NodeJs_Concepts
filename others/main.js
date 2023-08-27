// Mostrando un modulo propio o personalizado

/*const web = require("./modules/myModules")
const {myArray, myNumber} = require("./modules/myModules")

console.log(web);
console.log(myArray);
console.log(myNumber);*/

const math = require("../math/indexMath");

console.log(math.add(10, 20))
console.log(math.substract(20, 10))
console.log(math.multiply(10, 20))
console.log(math.divide(10, 20))