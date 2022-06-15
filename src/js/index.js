const listaAgentes = document.querySelectorAll('.agente')
const agentesGrande = document.querySelectorAll('.agente-grande')
const agentePlayer1 = agentesGrande[0]
const agentePlayer2 = agentesGrande[1]

listaAgentes.forEach(agente => {
    agente.addEventListener('click', () => {
        if (agentePlayer1.className == 'agente-grande agenteP1 jogador1-escolhendo') {
            const agenteAnterior = document.querySelector('.selecionadoP1')
            agenteAnterior.classList.remove('selecionadoP1')
            const agenteSelecionado = agente
            agenteSelecionado.classList.add('selecionadoP1')

            let imgNome = `full-${agenteSelecionado.attributes.id.value}.png`
            const imgP1 = document.getElementById('agenteP1')
            imgP1.src = `src/imagens/${imgNome}`

            const nomeAgente = agenteSelecionado.getAttribute('data-name')
            const nomeAtivo = document.querySelector('.nome1')
            nomeAtivo.innerHTML = `<h2>${nomeAgente}</h2>`

            const span = document.querySelector('.tagP1')
            span.remove();
            const jogador1 = document.createElement('span')
            jogador1.classList.add('tagP1')
            jogador1.innerHTML = 'P1'
            agenteSelecionado.appendChild(jogador1)
        } return;
    })
})

agentePlayer1.addEventListener('click', () => {

    agentesGrande[1].classList.remove('jogador2-escolhendo')
    agentesGrande[0].classList.add('jogador1-escolhendo')


    listaAgentes.forEach(agente => {
        agente.addEventListener('click', () => {
            if (agentePlayer1.className == 'agente-grande agenteP1 jogador1-escolhendo') {
                const agenteAnterior = document.querySelector('.selecionadoP1')
                agenteAnterior.classList.remove('selecionadoP1')
                const agenteSelecionado = agente
                agenteSelecionado.classList.add('selecionadoP1')

                const imgNome = 'full-' + agenteSelecionado.attributes.id.value + '.png'
                const imgP1 = document.getElementById('agenteP1')
                imgP1.src = "src/imagens/" + imgNome

                const nomeAgente = agenteSelecionado.getAttribute('data-name')
                const nomeAtivo = document.querySelector('.nome1')
                nomeAtivo.innerHTML = "<h2>" + nomeAgente + "<h2>"

                const span = document.querySelector('.tagP1')
                span.remove();
                const jogador1 = document.createElement('span')
                jogador1.classList.add('tagP1')
                jogador1.innerHTML = 'P1'
                agenteSelecionado.appendChild(jogador1)
            } return;
        })
    })



})

agentePlayer2.addEventListener('click', () => {

    agentesGrande[0].classList.remove('jogador1-escolhendo')
    agentesGrande[1].classList.add('jogador2-escolhendo')


    listaAgentes.forEach(agente => {
        agente.addEventListener('click', () => {
            if (agentePlayer2.className == 'agente-grande agenteP2 jogador2-escolhendo') {
                const agenteAnterior = document.querySelector('.selecionadoP2')
                agenteAnterior.classList.remove('selecionadoP2')
                const agenteSelecionado = agente
                const agenteGrande = document.getElementById(agenteSelecionado.attributes.id.value)
                agenteGrande.classList.add('selecionadoP2')

                const imgNome = agenteSelecionado.attributes.id.value + '.png'
                const imgP2 = document.getElementById('agenteP2')
                imgP2.src = "src/imagens/full-" + imgNome

                const nomeAgente = agenteSelecionado.getAttribute('data-name')
                const nomeAtivo = document.querySelector('.nome2')
                nomeAtivo.innerHTML = "<h2>" + nomeAgente + "<h2>"

                const span = document.querySelector('.tagP2')
                span.remove();
                const jogador2 = document.createElement('span')
                jogador2.classList.add('tagP2')
                jogador2.innerHTML = 'P2'
                agenteSelecionado.appendChild(jogador2)
            } return;
        })
    })

})

