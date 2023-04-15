function Calcular() {
    var x, r, i;
   
    for (i = 1; i <= 5; i++) {
        x = parseInt(document.getElementById("txtn1").value);
        r = x * 3

        document.getElementById("resposta").value = i + "º repetição , O Resultado da multiplicação é: " + r;

    }
     
}
