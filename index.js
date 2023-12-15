// Defina o tempo total em segundos para cada pergunta
const tempoPorPergunta = 15;   
let tempoRestante = tempoPorPergunta;
let timer;

function atualizarTempoRestante() {
    // Atualize a exibição do tempo restante na interface (por exemplo, atualize o texto em um elemento HTML)
    const elementoTempo = document.getElementById('tempo');
    elementoTempo.textContent = tempoRestante;
}

function iniciarTimer() {
    tempoRestante = tempoPorPergunta;
    atualizarTempoRestante();
    timer = setInterval(contagemRegressiva, 1000);
}

function contagemRegressiva() {
    tempoRestante--;
    atualizarTempoRestante();

    if (tempoRestante === 0) {
        finalizarPergunta();
    }
}

function finalizarPergunta() {
    // Realize as ações necessárias para finalizar a pergunta (por exemplo, exibir a resposta correta, avançar para a próxima pergunta, etc.)
    clearInterval(timer);
    // Redirecionar para a página de perda
    window.location.href = 'perdeu.html';
}

// Quando a página carregar, inicie o timer
window.onload = iniciarTimer;