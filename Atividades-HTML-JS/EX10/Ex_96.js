
function Mudar() {
           
    var n1 = document.getElementById("txtN1").value;
   
    if (n1 < 0) {
    x = Number(n1)* Number(-1)
    document.getElementById("txtResultado").value = "O Numero é : "+ x;
    }
    else{
        document.getElementById("txtResultado").value = "O Numero é : "+ n1;
    }
}
