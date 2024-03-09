function aceitar() {
    alert("Parabéns, agora a gente namora!!! 😍");

    var content = document.querySelector(".container");
    content.innerHTML = "";

    var gatinho = document.createElement("img");
    gatinho.src = "gatinho.gif";
    gatinho.alt = "Gatinho Fofo";
    gatinho.style.width = "100%";
    gatinho.style.height = "100%";
    gatinho.style.objectFit = "cover";
    gatinho.style.zIndex = "9999";

    document.body.appendChild(gatinho);
}

function recusar() {
    moveBotaoNao();
}

function moveBotaoNao() {
    var naoBtn = document.getElementById("naoBtn");

    var novoLeft = Math.random() * (window.innerWidth - naoBtn.clientWidth);
    var novoTop = Math.random() * (window.innerHeight - naoBtn.clientHeight);

    naoBtn.style.left = novoLeft + "px";
    naoBtn.style.top = novoTop + "px";
}
