//Lógica principal para função de criptografar e descriptografar, evento dos botões
document.addEventListener("DOMContentLoaded", function() {
    const textoInput = document.getElementById("resultado-texto");
    const criptografarBtn = document.getElementById("criptografar");
    const descriptografarBtn = document.getElementById("descriptografar");
    const conteudoCriptoProntaElement = document.querySelector(".conteudo_cripto_pronta");
    
    criptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        if (!texto.trim()) {
            alert("Por favor, preencha a caixa de texto antes de criptografar.");
            return;
        }
        if (verificarTexto(texto)) {
            const textoCriptografado = criptografar(texto);
            //conteudoCriptoProntaElement.textContent = textoCriptografado;
            conteudoCriptoProntaElement.querySelector(".caixa_texto_cripto").value = textoCriptografado;
            // Exibe a caixa de texto após o clique
            conteudoCriptoProntaElement.querySelector(".caixa_texto_cripto").style.display = "block";
            conteudoCriptoProntaElement.querySelector(".img_menino").style.display = "none";
            conteudoCriptoProntaElement.querySelector(".conteudo_nenhuma").style.display = "none";
            conteudoCriptoProntaElement.querySelector(".conteudo_digite").style.display = "none";
        }
    });

    descriptografarBtn.addEventListener("click", function(){
        const texto = textoInput.value;
        if (!texto.trim()) {
            alert("Por favor, preencha a caixa de texto antes de descriptografar.");
            return;
        }
        const textoDescriptografado = descriptografar(texto);
        //conteudoCriptoProntaElement.textContent = textoDescriptografado;
        conteudoCriptoProntaElement.querySelector(".caixa_texto_cripto").value = textoDescriptografado;
        // Exibe a caixa de texto após o clique
        conteudoCriptoProntaElement.querySelector(".caixa_texto_cripto").style.display = "block";
          // Oculta os elementos
          conteudoCriptoProntaElement.querySelector(".img_menino").style.display = "none";
          conteudoCriptoProntaElement.querySelector(".conteudo_nenhuma").style.display = "none";
          conteudoCriptoProntaElement.querySelector(".conteudo_digite").style.display = "none";
    });
});

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


