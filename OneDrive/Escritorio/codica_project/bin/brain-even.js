import readlineSync from 'readline-sync';

  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question(`¿ Cuál es tu nombre?`);

  console.log(`¡Hola, ${name.toLowerCase()}!`);

  console.log(`Responde "si" si el número es par, de lo contrario responde "no".`);

  let correctAnswers = 0;

  while(correctAnswers < 3){
   const number = Math.floor(Math.random() * 100) + 1;
   console.log(`Pregunta: ${number}`); 
   const answer = readlineSync.question('tu respuesta: ').toLowerCase();
   const correctAnswer = number % 2 === 0 ? 'si' : 'no';

   if(answer === correctAnswer){
    console.log('¡Correcto!\n');
    correctAnswers++;

   } else {

    console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡intentemoslo de nuevo, ${name}!`);
    process.exit(1);

   }

}
console.log(`felicidades, ${name}!`);