function Converter() {
    resp=""
     for ( var C=10; C <= 100; C+=10) {
   var F=Number((9 * C + 160) /5) +"\n"
    resp+= C + "º Celsius = " + F + "º Fahrenheit\n";
    }
     document.getElementById("resultado").value=resp ;
}