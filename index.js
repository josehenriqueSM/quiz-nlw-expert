const questions = [
    {
      question: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      answer: [
        "var",
        "let",
        "const",
      ],
      correct: 2
    },
    {
      question: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array?",
      answer: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correct: 1
    },
    {
      question: "O que o operador '===' faz em JavaScript?",
      answer: [
        "Compara valores e tipos sem coerção",
        "Compara valores com coerção",
        "Atribui valores",
      ],
      correct: 0
    },
    {
      question: "Como você escreve um comentário de linha em JavaScript?",
      answer: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correct: 0
    },
    {
      question: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      answer: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
      ],
      correct: 0
    },
    {
      question: "O que o método 'map()' faz em um array?",
      answer: [
        "Filtra os elementos do array",
        "Mapeia os elementos do array para uma nova array",
        "Ordena os elementos do array",
      ],
      correct: 1
    },
    {
      question: "Qual é a função do operador '&&' em JavaScript?",
      answer: [
        "Operador de adição",
        "Operador de concatenação",
        "Operador lógico AND",
      ],
      correct: 2
    },
    {
      question: "O que a declaração 'let' faz em JavaScript?",
      answer: [
        "Declara uma constante",
        "Declara uma variável com escopo de bloco",
        "Declara uma função",
      ],
      correct: 1
    },
    {
      question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      answer: [
        "pop()",
        "remove()",
        "deleteLast()",
      ],
      correct: 0
    },
    {
      question: "O que é o conceito de 'hoisting' em JavaScript?",
      answer: [
        "Elevação de objetos",
        "Elevação de funções",
        "Elevação de variáveis",
      ],
      correct: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corrects = new Set();
  const totalOfQuestions = questions.length;
  const showTotal = document.querySelector('#hits span');
  showTotal.textContent = corrects.size + ' de ' + totalOfQuestions;
  
  //loop ou laço de repetição
  for(const item of questions) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.question;
    
    for(let answer of item.answer) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = answer;
      dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item));
      dt.querySelector('input').value = item.answer.indexOf(answer);
      dt.querySelector('input').onchange = (event) => {
        const thisCorrect = event.target.value == item.correct;
        
        corrects.delete(item);
        if(thisCorrect) {
          corrects.add(item);
        }
       showTotal.textContent = corrects.size + ' de ' + totalOfQuestions;
  
      }
      
      quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove();
    
    // coloca as question na tela
    quiz.appendChild(quizItem);
  }