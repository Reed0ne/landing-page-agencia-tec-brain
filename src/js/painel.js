const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById("btn-voltar")
let imagemAtual = 0

setaAvancar.addEventListener("click", function() {
    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens){
        return;
    }

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagemAtual++
    imagensPainel[imagemAtual].classList.add('mostrar')
})

setaVoltar.addEventListener("click", function() {
    if(imagemAtual === 0){
        return
    }

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagemAtual--
    imagensPainel[imagemAtual].classList.add('mostrar')
})