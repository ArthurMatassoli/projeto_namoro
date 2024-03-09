function aceitar() {
    // Exibe alerta com a mensagem de parabéns
    alert("Parabéns, agora a gente namora!!! 😍");

    // Remove o conteúdo atual
    var content = document.getElementById("content");
    content.innerHTML = "";

    // Adiciona o gif de gatinho cobrindo a tela
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

    // Adiciona o gatinho ao corpo da página
    document.body.appendChild(gatinho);
}
