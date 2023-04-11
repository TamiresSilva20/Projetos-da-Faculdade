function calcular(){
    var N = Number(document.getElementById("txtn1").value);
    var fat = 1;
    for(var i = 1; i <= N; i++) {
        fat*=i
    }
    document.getElementById("resposta").value="O fatorial de " + N + " é " + fat;
}