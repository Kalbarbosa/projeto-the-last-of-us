document.addEventListener("DOMContentLoaded", function () {
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll(".imagem");
    botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            botoesCarrossel.forEach((botao) => {
                botao.classList.remove("selecionado");
            });
            botao.classList.add("selecionado");
            imagens.forEach((imagem) => {
                imagem.classList.remove("ativa");
            });
            imagens[indice].classList.add("ativa");
        });
    });
});
