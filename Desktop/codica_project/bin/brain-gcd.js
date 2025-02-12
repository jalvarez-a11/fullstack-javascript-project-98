import readlineSync from 'readline-sync';

function calcularMCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function generateRandomNumbers() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return [num1, num2];
}

function playGame() {
  const name = readlineSync.question('¡Bienvenido a Brain Games! ¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  let score = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const [num1, num2] = generateRandomNumbers();
    const result = calcularMCD(num1, num2);
    console.log(`¿Cuál es el MCD de ${num1} y ${num2}?`);
    const userAnswer = parseInt(readlineSync.question('Tu respuesta: '));

    if (userAnswer === result) {
      console.log('¡Correcto!');
      score++;
    } else {
      console.log(`¡Incorrecto! La respuesta correcta era: ${result}`);
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

playGame();
   


