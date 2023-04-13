function Calcular() {
   var soma = 0; 
    for (var i = 1; i <= 500; i++) {
        if(i%2==0){
            soma+=i;
        }
    }

    document.getElementById("resultado").value = soma;
}