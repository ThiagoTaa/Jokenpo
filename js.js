var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorPontos = 0; 
var computadorEscolha = 0;
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
//Função para somar pontos
function somarPontosJogar() {
    jogadorPontos = jogadorPontos + 1;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}
// Função para somar pontos do computador
function somarPontosComputador() {
    computadorPontos = computadorPontos + 1;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}
//função para selecionar a escolha
function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

//Função para deselecionar a escolha anterior
function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}
/**
 * escolhe a Jogada do usuario//
 * 1 -- Pedra
 * 2 -- Papel
 * 3 -- Tesoura
*/
function jogar(escolha){
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    //sortear jogada do computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
   
    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontosJogar();
    }
    else if (ganhador == 2) {
        mensagem('Ponto para o Computador');
        somarPontosComputador();
    }
    setTimeout(function () { 
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ' escolha uma opção...')
    
    }, 3500);
}
document.getElementById('jogador-escolha-1').onclick = function(){jogar(1)};
document.getElementById('jogador-escolha-2').onclick = function(){jogar(2)};
document.getElementById('jogador-escolha-3').onclick = function(){jogar(3)};

jogadorNome = prompt('Qual é o seu nome?');

mensagem('Bem vindo ' + jogadorNome + ' esta preparado? Escolha uma opção...');
definirNomeJogador(jogadorNome);