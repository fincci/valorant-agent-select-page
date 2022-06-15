const listaAgentes = document.querySelectorAll('.agente')
const agentesGrande = document.querySelectorAll('.agente-grande')
const agentePlayer1 = agentesGrande[0]
const agentePlayer2 = agentesGrande[1]

player1Selecionando()
player2Selecionando()

function player1Selecionando() {
    agentePlayer1.addEventListener('click', () => {
        agentePlayer2.classList.remove('jogador2-escolhendo')
        agentePlayer1.classList.add('jogador1-escolhendo')
        let ani = document.getElementById('indicator')
        if (ani.style.animation !== 'changeSides .3s reverse') {
            ani.style.animation = 'none';
            ani.offsetHeight;
            ani.style.animation = 'changeSides .3s reverse';
        }
    })
}

function player2Selecionando() {
    agentePlayer2.addEventListener('click', () => {
        agentePlayer1.classList.remove('jogador1-escolhendo')
        agentePlayer2.classList.add('jogador2-escolhendo')
        let ani = document.getElementById('indicator')
        ani.style.animation = 'none';
        ani.offsetHeight;
        ani.style.animation = 'changeSides .3s forwards';
    })
}

// function ani() {
//     document.getElementById('indicator').classList.add('animacoes')
// }

listaAgentes.forEach(agente => {

    agente.addEventListener('click', () => {
        if (agentePlayer1.classList.contains('jogador1-escolhendo')) {
            var playerAtivo = 'P1'
        } else {
            var playerAtivo = 'P2'
            console.log(playerAtivo);
        }

        mudarClasseSelecionado()
        mudarImg()
        mudarNome()
        criarTag()

        function mudarClasseSelecionado() {
            const agenteAnterior = document.querySelector(`.selecionado${playerAtivo}`)
            agenteAnterior.classList.remove(`.selecionado${playerAtivo}`)
            const agenteSelecionado = agente
            agenteSelecionado.classList.add(`.selecionado${playerAtivo}`)
        }

        function mudarImg() {
            let imgNome = `full-${agente.attributes.id.value}.png`
            const img = document.getElementById(`agente${playerAtivo}`)
            img.src = `src/imagens/${imgNome}`
        }

        function mudarNome() {
            const nomeAgente = agente.getAttribute('data-name')
            const nomeAtivo = document.querySelector(`.nome${playerAtivo}`)
            nomeAtivo.innerHTML = `<h2>${nomeAgente}</h2>`
        }

        function criarTag() {
            const span = document.querySelector(`.tag${playerAtivo}`)
            span.remove();
            const jogador1 = document.createElement('span')
            jogador1.classList.add(`tag${playerAtivo}`)
            jogador1.innerHTML = playerAtivo
            agente.appendChild(jogador1)
        }
    })
})