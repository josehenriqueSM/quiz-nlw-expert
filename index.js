const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      resposta: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array?",
      resposta: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      resposta: [
        "Compara valores e tipos sem coerção",
        "Compara valores com coerção",
        "Atribui valores",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de linha em JavaScript?",
      resposta: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      resposta: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array?",
      resposta: [
        "Filtra os elementos do array",
        "Mapeia os elementos do array para uma nova array",
        "Ordena os elementos do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      resposta: [
        "Operador de adição",
        "Operador de concatenação",
        "Operador lógico AND",
      ],
      correta: 2
    },
    {
      pergunta: "O que a declaração 'let' faz em JavaScript?",
      resposta: [
        "Declara uma constante",
        "Declara uma variável com escopo de bloco",
        "Declara uma função",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      resposta: [
        "pop()",
        "remove()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      resposta: [
        "Elevação de objetos",
        "Elevação de funções",
        "Elevação de variáveis",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.resposta.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        
        corretas.delete(item);
        if(estaCorreta) {
          corretas.add(item);
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
      }
      
      quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove();
    
    // coloca as pergunta na tela
    quiz.appendChild(quizItem);
  }