function moveBotaoNao() {
    // Obtém o botão "Não"
    var naoBtn = document.getElementById("naoBtn");

    // Calcula uma nova posição aleatória dentro da janela
    var novoLeft = Math.random() * (window.innerWidth - naoBtn.clientWidth);
    var novoTop = Math.random() * (window.innerHeight - naoBtn.clientHeight);

    // Define a nova posição do botão
    naoBtn.style.left = novoLeft + "px";
    naoBtn.style.top = novoTop + "px";
}

function aceitar() {
    alert("Parabéns, agora a gente namora!!! 😍");

    var content = document.getElementById("content");
    content.innerHTML = "";

    var gatinho = document.createElement("img");
    gatinho.src = "gatinho.gif";
    gatinho.alt = "Gatinho Fofo";
    gatinho.style.position = "fixed";
    gatinho.style.top = "0";
    gatinho.style.left = "0";
    gatinho.style.width = "100%";
    gatinho.style.height = "100%";
    gatinho.style.objectFit = "cover";
    gatinho.style.zIndex = "9999";

    document.body.appendChild(gatinho);
}

function recusar() {
    moveBotaoNao();
}
