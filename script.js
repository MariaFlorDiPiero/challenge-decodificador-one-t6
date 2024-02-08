//Lógica principal para função de criptografar e descriptografar, evento dos botões
document.addEventListener("DOMContentLoaded", function() {
    const textoInput = document.getElementById("texto");
    const criptografarBtn = document.getElementById("criptografar");
    const descriptografarBtn = document.getElementById("descriptografar");
    
    criptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        if (verificarTexto(texto)) {
        const textoCriptografado = criptografar(texto);
        exibirResultado(textoCriptografado);
    }
    })

    descriptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        const textoDescriptografado = descriptografar(texto);
        exibirResultado(textoDescriptografado);
    })

})

//Lógica de criptografia
function criptografar(texto){
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

//Lógica da descriptografia
function descriptografar(texto){
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u")
}

//Função que impede de utilizar maiúsculas e caracteres especiais
function verificarTexto(texto) {
    // Expressão regular para verificar se há maiúsculas ou caracteres especiais
    const regex = /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?\/\\|'"-=]/;
    if (regex.test(texto)) {
        alert("Por favor, use apenas letras minúsculas e sem caracteres especiais.");
        return false;
    }
    return true;
}

function exibirResultado(resultado){
    alert(resultado);
}

