var servidor = require('http');
var url = require('url');

function iniciar(enrutar) {
    function arrancaServidor(requiere, respuesta) {

        var ruta = url.parse(requiere.url).pathname;
        console.log("Alguien se ha conectado");
        enrutar(ruta);

        console.log("Alguien se ha conectado a mi servidor");
        respuesta.writeHead(200, { "Content-type": "text/html" });
        respuesta.write("<h1>El servidor funciona correctamente </h1>");
        respuesta.end();
    }
    servidor.createServer(arrancaServidor).listen(8888);
}
exports.iniciar = iniciar