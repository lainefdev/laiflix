// ===== ELEMENTOS =====
const botaoSom = document.getElementById("botao-som")
const video = document.getElementById("video")
const btnInfo = document.getElementById("btn-info")
const modal = document.getElementById("modal")
const modalFechar = document.getElementById("modal-fechar")
const tudum = document.getElementById("tudum")

const telaEntrada = document.getElementById("tela-entrada")

telaEntrada.addEventListener("click", function () {
    tudum.play()
    telaEntrada.style.opacity = "0"
    setTimeout(function () {
        telaEntrada.style.display = "none"
    }, 800)
})

// ===== SOM: TOGGLE mudo/com som =====
botaoSom.addEventListener("click", function () {
    video.muted = !video.muted
    botaoSom.textContent = video.muted ? "🔇" : "🔊"
})

// ===== MODAL: ABRIR =====
btnInfo.addEventListener("click", function () {
    modal.style.display = "block"
    document.body.style.overflow = "hidden" // trava scroll do fundo
})

// ===== MODAL: FECHAR pelo botão X =====
modalFechar.addEventListener("click", fecharModal)

// ===== MODAL: FECHAR ao clicar fora do conteúdo =====
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        fecharModal()
    }
})

// ===== MODAL: FECHAR com tecla ESC =====
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        fecharModal()
    }
})

function fecharModal() {
    modal.style.display = "none"
    document.body.style.overflow = "" // libera scroll
}