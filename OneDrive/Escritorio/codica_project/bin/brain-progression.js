import sayHiToUser from '../src/cli.js';

const name = sayHiToUser();

import readlineSync from 'readline-sync';

function generateProgression(start, diff, length) {
    let progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * diff);
    }
    return progression;
}

function playBrainProgression() {
    console.log('¿Qué número falta en la progresión?');

    for (let round = 0; round < 3; round++) {
        const length = Math.floor(Math.random() * 6) + 5; // Longitud entre 5 y 10
        const start = Math.floor(Math.random() * 10); // Número inicial aleatorio
        const diff = Math.floor(Math.random() * 5) + 1; // Diferencia aleatoria (mínimo 1)
        const progression = generateProgression(start, diff, length);
        const hiddenIndex = Math.floor(Math.random() * length); // Índice oculto
        const correctAnswer = progression[hiddenIndex];

        // Crear la versión oculta de la progresión
        const question = [...progression];
        question[hiddenIndex] = '..';

        console.log(`Pregunta: ${question.join(' ')}`);
        const userAnswer = readlineSync.question('Tu respuesta: ');

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('¡Correcto!\n');
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
            console.log(`¡Inténtalo de nuevo, ${name}!`);
            return;
        }
    }

    console.log(`¡Felicidades, ${name}!`);
}

playBrainProgression(name);

            
