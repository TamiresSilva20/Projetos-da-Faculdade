function Mostrar() {
    var N = Number(document.getElementById("txtn1").value);
    var resp = ""
    for (var i = 0; i <= 10; i++) {
        resp += N + " X " + i + " = " + (N * i) + "\n";
    }
    document.getElementById("resposta").value = resp;
}