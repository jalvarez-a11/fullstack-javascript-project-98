import sayHiToUser from '../src/cli.js';

const name = sayHiToUser();

import readlineSync from 'readline-sync';

function calcularMCD(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function generateRandomNumbers() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  return [num1, num2];
}

function playGame() {
 
  let score = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const [num1, num2] = generateRandomNumbers();
    const result = calcularMCD(num1, num2);
    console.log(`Encuentra el máximo común divisor de los números dados.`);
    console.log(`pregunta: ${num1} y ${num2}`)
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer === result) {
      console.log('¡Correcto!');
      score++;
    } else {
      console.log(` ${userAnswer}es una respuesta incorrecta ;(, La respuesta correcta era: ${result}`);
      console.log(`¡Intentemoslo de nuevo, ${name}!`);
      break;
    }
  }

  if (score === rounds) {
    console.log(`¡Felicidades, ${name}! Has respondido correctamente a todas las preguntas.`);
  } else {
    console.log(`¡Buen intento, ${name}! Has obtenido ${score} puntos de ${rounds} posibles.`);
  }
}

playGame(name);
   


