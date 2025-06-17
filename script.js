const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const imcForm = document.getElementById("imcForm");

imcForm.addEventListener('submit', function(event){
    event.preventDefault();
    calcularIMC(peso.value, altura.value);
})



function calcularIMC(p , a){
    const conta = p / (a*a);
    let classificacao = ""
   

    if (conta<18.5){
        classificacao = "Abaixo do peso"
    }
    else if (conta<=24.9){
        classificacao = "Saudavel"
    }
    else if ( conta<=29.9){
        classificacao = "Sobrepeso"
    }
    else if (conta<=34.9){
        classificacao = "Obesidade I"
    }
    else if( conta<=39.9){
        classificacao = "Obesidade II"
    }
    else{
        classificacao = "Obesidade III"
    }
    resultado.textContent = (`Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta}, seu nível é ${classificacao}`)
}
