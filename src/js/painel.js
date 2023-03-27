const imagensPainel = document.querySelectorAll('imagem-painel');
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

console.log('oi')
setaAvancar.addEventListener("click", function() {
    imagemAtual++
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
})