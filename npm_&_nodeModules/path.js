const path = require('path');

// convertir una ruta de modo reconocible para nuestro SO
const filepath = path.join('/public', '/dist', '/module', '/index.js');

console.log(filepath)
console.log(path.basename(filepath));
console.log(path.dirname(filepath))
console.log(path.parse(filepath))
console.log(path.resolve('dist'))