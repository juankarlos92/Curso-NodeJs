// Node no esta en la consola si no en el navgeador 
//web, La mayoria de proyectos web  es connseguir que nodejs
// este a la escucha a traves de un puerto web 
//y regrese algo de contenido en un navegador.
//Crear un servidor en node JS

/**Creamos palabra reservada var con una variable  */
var servidor = require('http');
//El modulo http es muy importante ya que contiene todos 
//todos los metodos para hacer funcionar a traves de http
// es crar una variable y asigarle todos los valores del modulo de http
/**Crear una funcion. creo un metodo de java script poniendolo un nombre al metoso
 * dos parametros requiere y respues. me acabo de inventar.
 * 
 * 
 */
function arrancaServidor(require, respuesta) {
    /** el segundo parametro es respuesta. metodo writehead (enviar una cabezera al
     * navegador web)antes de enviar un documento al navegador
     * hay que decir que tipo de documento voy a enviar
     * dos parametros(200 codigo de todo correcto(404 de pagina no encontrada)
     * 200 es dificilque lo veamos nunca porque una pagina carga correctamente.
     * { "Content-Type": "text/html" }antes de enviar al navegador es decirle que tipo de informacion 
     * le estoy enviando. no te voy a enviar un imagen png,pdf. si no html.
     * */
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    /**respuesta corresponde al parametro que he creado y write corresponde
     * a unos de los modulos de http
     * escribimos el texto que deseamos que no se nos muestre.
     * "<h1>El servidor funciona conrrectamente</h1>")
     */
    respuesta.write("<h1>El servidor funciona correctamente</h1>");
    /**enviare esto y nos mosttrara el mensaje de html */
    respuesta.end();
}
/**Creo un metodo createSERVER es un metodo de htpp que se encarga de iniciar
 * un servidor con los parametro que hayamos creado en esta funcion
 * por ultimo trabajere con un metodo listen , el metodo
 * listen especifica el puerto donde la maquina  donde voy
 * a estar escuchando.8888 virtualmente puedo trabajar con cualuier puerto
 * pero debo tener cuidado con el cortafuegos o el antivirus que tenga instalado 
 * no este bloqueando el puerto correxpondiente. 80,8080,8888, son puertos que 
 * suelen estar abiertos para comunicacion web.
 * yo acabo de elegor el puerto mencionado.
 */
servidor.createServer(arrancaServidor).listen(8888);
/** Tambien Podemos probar con esta entrada */
//servidor.createServer(arrancaServidor).listen(8888);
/**Lo ejecutamos en el terminal como node servidor.js
 * para el inicio del servidor en la consola con control c
 */

/**LUEGO VOY AL NAVEGADOR Y PRUEBO como estoy localmente
 * usare localhost:8888
 * paro el servidor y 
 * vuelvo a ejecutar desde la consola y
 * ejecuto en el navegador con el otro puerto/
 * y probare lo mismo con el puerto
 * localhost:8080
 * 
 */