
function Calcular() {

    var nSalario;
    var cod = document.getElementById("txtCod").value;
    var salario = parseFloat(document.getElementById("txtSal").value);

    if ( cod == 'gerente' || cod == 101) {
    nSalario = parseFloat(salario * 1.1);
        }
        if ( cod == 'engenheiro' || cod == 102) {
    nSalario = parseFloat(salario * 1.2);
        }

        if ( cod == 'técnico' || cod == 103) {
    nSalario = parseFloat(salario * 1.3);
        }
        if (cod < 101 || cod > 103) {
    nSalario = parseFloat(salario * 1.4);  
        }
        var dif = nSalario -salario;

        document.getElementById("txtResultado").value =("Antigo salario: R$" + salario.toFixed(3) + "\nNovo Salario: R$" + nSalario.toFixed(3) + "\nDiferença: R$" + dif.toFixed(3) );
}
