function mostrar() {
    var num = ""
    for (var i = 1; i <= 200; i++) {
        num += i + "\n";
    }
    document.getElementById("resposta").value = num;
}