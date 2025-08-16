let listaDeNumerosSorteados = []; // lista vazia
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio(); // invoca a função gerarNumeroAleatorio
let tentativas = 1;

function exibirTextoNaTela(tag, texto) { // função com parâmetros
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
exibirTextoNaTela("h1", "Jogo do Número Secreto"); // função com parâmetros é invocada para o h1
exibirTextoNaTela("p", "Escolha um número entre 1 e 100"); // função com parâmetros é invocada para o p
}

exibirMensagemInicial() // função para exibir as mensagem Inicial é invocada

function verificarChute() { // função sem parâmetros
    let chute = document.querySelector("input").value // .value irá pegar apenas o valor contido na tag input do HTML
    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "Parabéns, você acertou!")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela ("p", `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled"); // seleciona uma tag pelo ID e remove um atributo
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ("p", "O número secreto é menor")
    } else {
        exibirTextoNaTela("p", "O número secreto é maior")
    }
    tentativas++ // contador de tentativas
    limparCampo(); // função é invocada para limpar o input quando o chute for =! numero secreto
}

function gerarNumeroAleatorio() { // função com retorno para gerar um número aleatório
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeItensNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeItensNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
        
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // listaDeNumerosSorteados já possui o numeroEscolhido???
        return gerarNumeroAleatorio(); // recursão = quando a função chama a própria função
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // adiciona o numeroEscolhido na listaDeNumerosSorteados
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() { // função para limpar o input
    let chute = document.querySelector("input");
    chute.value = ""
}

function reiniciarJogo() { // função sem parâmetros e sem retorno
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial()
    limparCampo()
    document.getElementById("reiniciar").setAttribute("disabled", true); // desabilitar o botão de reiniciar ao começar um novo jogo
}