function aceitar() {
    alert("Parabéns, agora a gente namora!!! 😍");

    var content = document.querySelector(".container");
    content.innerHTML = "";

    var gatinho = document.createElement("img");
    gatinho.src = "gatinho.gif";
    gatinho.alt = "Gatinho Fofo";
    gatinho.style.width = "50%"; // Ajuste o tamanho conforme necessário
    gatinho.style.height = "50%";
    gatinho.style.objectFit = "cover";
    gatinho.style.zIndex = "9999";

    document.body.appendChild(gatinho);
}

function recusar() {
    var naoBtn = document.getElementById("naoBtn");

    var novoLeft = Math.random() * (Math.min(window.innerWidth, 1920) - naoBtn.clientWidth);
    var novoTop = Math.random() * (window.innerHeight - naoBtn.clientHeight);

    naoBtn.style.left = novoLeft + "px";
    naoBtn.style.top = novoTop + "px";
}
