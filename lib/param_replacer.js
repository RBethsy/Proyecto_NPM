var reemplazo = "Hello",
    entrada = "%param% World!";

var salida = entrada.replace(/%(.*?)%/g, reemplazo);

console.log(salida);