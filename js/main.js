function clicou(){
    document.getElementById("textoTela").innerHTML="Obrigado por Clicar...";
}
function redirecionamento(){
    window.open("https://globallabs.academy/");
}
function passeOmouse(elemento){
    elemento.innerHTML="Você passou o mouse aqui...";
}
function voltar(elemento){
    elemento.innerHTML="Passe o MOUSE AQUI.";
}
function funcaoOnchange(elemento){
    document.getElementById("texto").innerHTML=elemento.value;
}

/*for(var count = 0; count <= 5;count++){
    console.log(count);
}*/
/*
function soma(n1, n2){
    return n1+n2;
}
function replaceString(frase, valor1, valor2){
    return frase.replace(valor1, valor2);
}*/
/*alert(soma(10,20));
alert(replaceString("Brasil perdeu", "Brasil", "Japão"));*/
/*var nome = "Emanoel dos Santos Correia";
var idade = prompt("Qual sua idade");
var idade2= 10;
var frase ="Eu sou Brasileiro";
if(idade>=18){
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}*/
//alert("Bem Vindo "+ nome);
//alert(idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(" "+frase.toUpperCase());
//alert(frase.toUpperCase())