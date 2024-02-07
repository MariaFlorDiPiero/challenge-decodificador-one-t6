document.addEventListener("DOMContentLoaded", function() {
    const textoInput = document.getElementById("texto");
    const criptografarBtn = document.getElementById("criptografar");
    const descriptografarBtn = document.getElementById("descriptografar");

    criptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        const textoCriptografado = criptografar(texto);
        exibirResultado(textoCriptografado);
    })

    descriptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        const textoDescriptografado = descriptografar(texto);
        exibirResultado(textoDescriptografado);
    })
})

function criptografar(texto){
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function descriptografar(texto){
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u")
}

function exibirResultado(resultado){
    alert(resultado);
}

