//verifica nome em branco
function verfBranco(){
    var nome=document.getElementById("txtNome").value;
    if (isNaN(nome)){
    }
    else {
    alert("Nome não digitado: Campo em branco");
 }
}

function idade() {
    //verifica se a idade é um numero
    var idade = document.getElementById("txtIdade").value;
    if(isNaN(parseInt(idade))){
        alert("Não é um numero");
    }

    else{
        alert("é um numero");
    }
//verifica se a idade é valida
    if(idade >= 0 | idade <=99){
        alert("A idade invalida");
    }

    else{
        alert("A idade valida");
    }
}
//temporizador
function tempo(){
timeid=setInterval("alert('Você não digitou nada a mais de 1 minuto');",60000);
}
function desativar(){
    clearInterval(timeid);
}
//verifica a mudanca de tamanho
function redimencionar(){

alert("Você mudou o tamanho da tela");
}