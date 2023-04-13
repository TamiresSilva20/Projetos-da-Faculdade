function Calcular() {
   var soma,media,resp
    resp=""
    soma=0
     for ( var i=1; i <=100; i++) {
        var n1 = parseFloat(prompt("Digite o "+i+"º valor"));
        soma+=n1;
    }
    media= soma/n1;
    resp+= "Soma = "+soma+  " Media ="+ media +"\n";
     document.getElementById("resultado").value=resp ;
}