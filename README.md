# Proyecto Gestion de Paquetes


Paquete Reemplazo de Parametros bajo una clave %   %

Resumen

Se utilizo el gestor de paquetes NPM.

Disponible en:

    Paquete de npm.js
    Repositorio en github

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

# instalar version inicial  1.0.1
npm install parameter_replacer@1.0.1

# instalar version inicial  1.0.2
npm install parameter_replacer@1.0.2

# instalar version inicial  1.2.2
npm install parameter_replacer@1.2.2

# Descripcion

El paquete cuenta con un parameter_replacer.js para observar el funcionamiento del paquete.

    La version beta: parameter_replacer@1.0.0-beta.1, reemplaza cualquier cosa encerrada entre % % por un valor unico.

    /* Script */
    var reemplazo = "Hello",
     entrada = "%param% World!";
     var salida = entrada.replace(/%(.*?)%/g, reemplazo);
     console.log(salida);

     La version inicial parameter_replacer@1.0.1, es la version inicial del paquete y mejorando el script aislando los parametros.

    La version parameter_replacer@1.0.2 presenta modificaciones de forma, sin afectar la funcionalidad.

    La version parameter_replacer@1.2.2, con esta forma de aislar parámetros con sus reemplazos podemos mejorar el reemplazo de parametros de muchas maneras, como por ejemplo, hacer un “hello world” multi idiomas. En esta version se adiciona nuevas caracteristicaspara poder dar mas funcionalidad.

    Y ejecutamos de la siguiente forma:
        $ node lib/parameter_replacer.js
            Hola Mundo! -- Mundo Hola!

    
   