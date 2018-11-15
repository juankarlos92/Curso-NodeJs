var servidor = require('http');

/**aqui es donde encapsularemos al archivo inicio
 * creando la funcion iniciar y dentro de esa funcion todo el codigo teniendo an
 * anteriormente.
 */
function iniciar() {
    function arrancaServidor(requiere, respuesta) {
        console.log("Alguien de ha conectado al servidor");
        respuesta.writeHead(200, { "Content-TYpe": "text/html" });
        respuesta.write("<h1>El servidor funciona correctamente</h1>");
        respuesta.end();

    }
    /**La creacion del servidor tambien desde estar dentro de la funcion */
    servidor.createServer(arrancaServidor).listen(8080);
}
/**debemos tomar en cuenta que vamos a trabajar con dos archivos
 * cuando trabajamos con dos archivos a partir de dos es necesario
 * especificar cual es la comunicacion de los archivos que le devuelve un 
 * archivo al otro archivo y se lo llamara con la siguiente linea de codigo
 */

/**Esto o haremos con un comando  */
exports.iniciar = iniciar;
/**lo que va hacer este codigo es que este archivo(export) va a 
 * exportar va a devolverle a iniciojs va a devolver iniciar la funcion que acabamos de crear.
 */