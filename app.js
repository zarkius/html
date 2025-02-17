var app = new XMLHttpRequest();
//console.log(app); // IMPRIME POR CONSOLA EL OBJETO app.  // COMENTADO EN PRODUCCION - DESCOMENTAR PARA DEPURAR
app.onreadystatechange = function () {
  if (app.readyState == 4 && app.status == 200) {
    console.log("Estas conectado a yposteriormente.com");
  }
};
app.open("GET", "/", true);
app.send();
