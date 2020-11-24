var jogadorNome;
var computadorEscolha;
var jogadorEscolha;

//Função para exibir mensagem
function mensagem(texto){
    document.getElementById('mensagem').innerHTML = texto;
}

//função para pegar o nome do jogador
function definirNomeJogador (nome){
    document.getElementById('jogador-nome').innerHTML = nome;
}
// Sortea entre 2 numeros
function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**calcula e retorna o vencedor
 * 0 -- empate
 * 1 -- jogador
 * 2 -- computador
*/
function calcularEscolha (jogador, computador){
    if(jogador == 1 && computador == 1){
        return 0;
    }
    else if(jogador == 1 && computador == 2){
        return 2;
    }
    else if(jogador == 1 && computador == 3){
        return 1;
    }
    if(jogador == 2 && computador == 1){
        return 1;
    }
    else if(jogador == 2 && computador == 2){
        return 0;
    }
    else if(jogador == 2 && computador == 3){
        return 2;
    }
    if(jogador == 3 && computador == 1){
        return 2;
    }
    else if(jogador == 3 && computador == 2){
        return 1;
    }
    else if(jogador == 3 && computador == 3){
        return 0;
    }
    
}

/**
 * escolhe a Jogada do usuario//
 * 1 -- Pedra
 * 2 -- Papel
 * 3 -- Tesoura
*/
function jogar(escolha){
    jogadorEscolha = escolha;

    //sortear jogada do computador
    computadorEscolha = sortear(1, 3);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
   
    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
    }
    else if (ganhador == 2) {
        mensagem('Ponto para o Computador');
    }
    //calcular vencedor

    //somar pontos

    //exibir para o usuario (mão)
}
document.getElementById('jogador-escolha1').onclick = function(){jogar(1)};
document.getElementById('jogador-escolha2').onclick = function(){jogar(2)};
document.getElementById('jogador-escolha3').onclick = function(){jogar(3)};

jogadorNome = prompt('Qual é o seu nome?');

mensagem('Bem vindo ' + jogadorNome + ' esta preparado? Escolha uma opção...');
definirNomeJogador(jogadorNome);