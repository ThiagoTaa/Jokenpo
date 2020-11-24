var jogadorNome;
document.getElementById('jogador-escolha1').onclick = function(){};
document.getElementById('jogador-escolha2').onclick = function(){};
document.getElementById('jogador-escolha3').onclick = function(){};

jogadorNome = prompt('Qual é o seu nome?');

document.getElementById('jogador-nome').innerHTML = jogadorNome;
document.getElementById('mensagem').innerHTML = 'Bem vindo ' + jogadorNome + ' esta preparado? Escolha uma opção...';