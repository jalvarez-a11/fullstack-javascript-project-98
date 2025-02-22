import sayHiToUser from '../src/cli.js';

const name = sayHiToUser(); // Llama a la función

import readlineSync from 'readline-sync';

 const operators = ['+', '-', '*'];

 function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function generateExpression() {
   
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${num1} ${operator} ${num2}`;
    const result = eval(expression);
    return {expression, result};

  }

  function playGame(){
    
   let score = 0;
   let rounds = 3;

   while(score < rounds){
    const {expression, result} = generateExpression();
    console.log(`¿Cuál es el resultado de la expresión?`);
    console.log(`pregunta: ${expression}`);
    const userAnswer = readlineSync.question('tu respuesta: ');

    if(Number(userAnswer) === result){
        console.log('correcto!');
        score++;

    } else {
        console.log(` ${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era ${result}.`)
        console.log(`¡Intentemoslo de nuevo, ${name}!`);
      break; // Termina el juego si hay una respuesta incorrecta
    }

    }
    if (score === rounds) {
      console.log(`¡Felicidades, ${name}! Has respondido correctamente a todas las preguntas.`);
    } else {
      console.log(`¡Buen intento, ${name}! Has obtenido ${score} puntos de ${rounds} posibles.`);
    }
  }
  
  playGame(name);

   



  