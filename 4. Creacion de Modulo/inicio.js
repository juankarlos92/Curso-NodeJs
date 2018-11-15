/**http era el modulo interno.
 * ahora vamos a convertir para llamarlo desde un modulo de  un archivo 
 * pincipal
 * Vamos a pasar parametros a archivo servidor, para que sea mas adaptable
 * 
 */
//Vamos a crear un modulo para pasarlo al archivo principal
/**
 * ./ es la ruta donde esta el archivo.
 * como node trabaja con javascript ya no es necesario poner la extencion
 * porque lo detecta por defecto
 * lo que se hara es llamar al archivo principal
 * y el archivo inicio llamara al archivo servidor.
 * lo que vamos es encpasular el codigo dentro de una funcion 
 * e el archivo serrvidor js
 */
var servidor = require("./servidor");
/**este es un metodo independiente para iniciar el servidor */
servidor.iniciar();
/**Y lo correremos al archivo iniciojs
 * donde se iniciaria nuestro servidor
 */
/**
 * Prepararemos el terreno para mas adelante pasar parametros
 * y personalizar sus funciones
 */