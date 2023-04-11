
function Ordenar() {
           
    var n1 = Number (document.getElementById("txtN1").value);
    var n2 = Number (document.getElementById("txtN2").value);
    var n3 = Number(document.getElementById("txtN3").value);

    if (n1 > n2) {
    X = n2;
    n2 = n1;
    n1 = X;
} else {
    n1=n1;
    n2=n2;
}
if (n1 > n3) {
    X = n3;
    n3 = n1;
    n1 = X;
} else {
    n1=n1;
    n3=n3;
}
if (n2 > n3) {
    X = n3;
    n3 = n2;
    n2 = X;
} else {
    n2=n2;
    n3=n3;
}
    document.getElementById("txtResultado").value = "Ordem crescente: " + n1+ ", "+n2+", "+n3;
    

}