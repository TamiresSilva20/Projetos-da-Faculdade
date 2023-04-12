function Calcular() {
    var soma = 0;
    for (var i = 1; i <= 100; i++) {
        soma += i;
    }

    document.getElementById("resposta").value = soma;
}