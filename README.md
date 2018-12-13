# Proyecto Gestion de Paquetes


Paquete Reemplazo de Parametros bajo una clave %   %

Objetivo:

Se crea un paquete que reemplace parámetros del tipo %clave% con una cadena que nosotros le vamos a proveer. Por ejemplo:

-> Cadena de entrada: %home_dir%/Proyectos

-> Operación: %home_dir% => /home/sergio

-> Cadena de salida: /home/sergio/Proyectos

Como Instalar:


# Instalar el paquete utilizando el gestor de paquetes NPM
npm install parameter_replacer

# instalar version beta
npm install parameter_replacer@1.0.0-beta.1

# instalar version inicial 1.0.1
npm install parameter_replacer@1.0.1

Descripcion

El paquete cuenta con un param_replacer.js para obervar el funcionamiento del paquete.

    La version beta: parameter_replacer@1.0.0-beta.1, reemplaza cualquier cosa encerrada entre % % por un valor unico.

    /* Script */
    var reemplazo = "Hello",
     entrada = "%param% World!";
     var salida = entrada.replace(/%(.*?)%/g, reemplazo);
     console.log(salida);

    
   