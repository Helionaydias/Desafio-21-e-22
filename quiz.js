const prompt = require('prompt-sync')({ sigint: true });

/**
 * Esta função solicita o nome do jogador e retorna o nome.
 */
function obterNomeJogador() {
  // Exibe uma mensagem solicitando o nome do jogador e retorna o valor digitado.
  return prompt('Qual o seu nome? ');
}

/**
 * Esta função faz uma pergunta ao jogador, verifica a resposta e retorna 1 se correta, 0 se incorreta.
 */
function fazerPergunta(pergunta, respostaCorreta) {
  // Exibe a pergunta e armazena a resposta do jogador.
  let resposta = prompt(pergunta + ' ');

  // Verifica se a resposta está correta (ignora maiúsculas e minúsculas).
  if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
    console.log('Parabéns!'); // Exibe uma mensagem de parabéns.
    return 1; // Retorna 1 ponto para uma resposta correta.
  } else {
    console.log('Resposta incorreta.'); // Exibe uma mensagem de resposta incorreta.
    return 0; // Retorna 0 pontos para uma resposta incorreta.
  }
}

/**
 * Esta função organiza o jogo do quiz.
 */
function jogarQuiz() {
  const jogador = obterNomeJogador(); // Chama a função para obter o nome do jogador.
  let pontuacao = 0; // Inicializa a pontuação do jogador com 0.

  // Define uma lista de perguntas e respostas corretas.
  const perguntas = [
    {
      pergunta:
        'Qual é o maior oceano do mundo? a) Atlântico b) Índico c) Pacífico d) Ártico',
      resposta: 'c',
    },
    {
      pergunta:
        'Quem foi o primeiro homem a pisar na Lua? a) Yuri Gagarin b) Buzz Aldrin c) Neil Armstrong d) Michael Collins',
      resposta: 'c',
    },
    {
      pergunta:
        'Qual é o animal terrestre mais rápido do mundo? a) Leopardo b) Tigre c) Guepardo d) Leão',
      resposta: 'c',
    },
    {
      pergunta: 'Qual é a fórmula química da água? a) H2O b) CO2 c) NaCl d) O2',
      resposta: 'a',
    },
    {
      pergunta:
        'Em que ano começou a Primeira Guerra Mundial? a) 1914 b) 1918 c) 1939 d) 1945',
      resposta: 'a',
    },
  ];

  // Percorre a lista de perguntas, faz cada pergunta e atualiza a pontuação.
  for (const item of perguntas) {
    pontuacao += fazerPergunta(item.pergunta, item.resposta);
  }

  // Exibe a pontuação final do jogador.
  console.log(
    `Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`,
  );
}

// Inicia o jogo chamando a função principal.
jogarQuiz();
