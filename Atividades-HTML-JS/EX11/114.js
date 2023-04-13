function Mostrar() {
    var i;
    var resp= ""
     for ( i=1; i < 200; i++) {
        if(i%4==0){
         resp+=i +"\n";
     }
    }
     document.getElementById("resultado").value = "Os seguintes Numeros  são divisiveis por 4:\n"+resp;
 }