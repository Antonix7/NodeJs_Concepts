// Viendo un poco sobre las request

const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }

    if(request.url === '/about') {
        response.write('acerca de')
        return response.end()
    }

    response.write(`
    <h1>Not found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">Volver a la pagina inicial</a>
    `)
    response.end()

})
server.listen(3000)

console.log('Server listening in port: 3000');
