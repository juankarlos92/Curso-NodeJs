var servidor = require('http');
//este modulo se va a encargar de registrar la url y 
//gestionar un comportamiento mas ordenado
//el servidor envia lo mismo
var url = require('url');

function arrancaServidor(require, respuesta) {
    console.log("Alguien se ha conectado");
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    respuesta.write("<h1>El servidor funciona correctamente</h1>");
    respuesta.end();

}
servidor.createServer(arrancaServidor).listen(8888);