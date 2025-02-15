import readlineSync from 'readline-sync';

function esPrimo(n) {
    if(n <= 1 ) return false
    if(n === 2 || n === 3) return true
    if(n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i * i <= n; i += 6){
        if(n % i === 0 || n % (i + 2) === 0) return false

    }
        return true
}

function playGame(){
   const name = readlineSync.question('¡ Bienvenido a brain games! ¿ cual es tu nombre?');
   console.log(`hola ${name}`);

   let score = 0;
   let rounds = 3;

   while(score < rounds){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const primo = esPrimo(randomNumber);

    console.log(`¿es un numero primo: ${randomNumber} (responde "si" o "no")`);
    const userAnswer = readlineSync.question('tu respuesta: ').toLowerCase();

    const isCorrect =(userAnswer === 'si' && primo) || (userAnswer === 'no' && !primo);

    if(isCorrect){
        console.log('correcto!');
        score++;

    } else {
        console.log(` ${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era ${primo}.`)
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
  
  playGame();