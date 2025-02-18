import readlineSync from 'readline-sync';

export default function sayHiToUser() {
  console.log('¡Bienvenido a brain games!');
  const name = readlineSync.question('¿ Cuál es tu nombre? ');

  console.log(`¡Hola, ${name.toLowerCase()}!`);

}
