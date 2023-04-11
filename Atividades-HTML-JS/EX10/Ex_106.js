function Calcular() {

    var total;
    var cod = parseInt(document.getElementById("txtCod").value);

    if (cod >= 100 & cod <= 105) {

        var qtd = document.getElementById("txtQtd").value;
        if (cod == 100) {
            total = 1.2 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Cachorro quente \nTotal á pagar: R$" + total.toFixed(2);
        }
        if (cod == 101) {
            total = 1.3 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Bauru simples \nTotal á pagar: R$" + total.toFixed(2);
        }

        if (cod == 102) {
            total = 1.5 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Bauru com ovo \nTotal á pagar: R$" + total.toFixed(2);
        }
        if (cod == 103) {
            total = 1.2 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Hambúrger \nTotal á pagar: R$" + total.toFixed(2);
        }
        if (cod == 104) {
            total = 1.3 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Cheeseburguer \nTotal á pagar: R$" + total.toFixed(2);
        }
        if (cod == 105) {
            total = 1 * Number(qtd);
            document.getElementById("txtResultado").value = +qtd + " Refrigerante \nTotal á pagar: R$" + total.toFixed(2);
        }
    } else{
        document.getElementById("txtResultado").value ="Digite um codigo valido";
    }
}