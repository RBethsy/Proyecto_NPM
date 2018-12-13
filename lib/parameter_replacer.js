var reemplazos = {
    "hello": "Hello",
    "world": "World"
  };
  
  var objetivo = "%hello% %world%! -- %world% %hello%!",
      param_encontrados = objetivo.match(/%(.*?)%/g);
  
  // Tener en cuenta que usamos match. Este método devuelve
  // un array de coincidencias, pero si no encuentra nada
  // devuelve null.
  if (param_encontrados) {
    var nombre_param = null,
        valor_reemplazo = null;
  
    for (var i=0; i < param_encontrados.length; i++) {
      // Quitamos los % del parámetro.
      nombre_param = param_encontrados[i].replace(/%/g, '');
      valor_reemplazo = reemplazos[nombre_param];
  
      // Vamos reemplazando los parámetros con sus valores
      // de forma iterativa.
      objetivo = objetivo.replace(param_encontrados[i], valor_reemplazo);
    }
  }
  
  console.log(objetivo);