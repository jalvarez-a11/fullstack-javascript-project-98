Tareas
Lee nuestros consejos para completar proyectos estos te ayudarán en situaciones difíciles.
Instala la última versión de Node.js globalmente en tu sistema (Instalación de JavaScript).
Clona el repositorio del proyecto localmente. Como resultado de la clonación del repositorio, se creará un directorio raíz del proyecto en tu sistema de archivos, donde colocaremos todos los archivos del proyecto. Por defecto, el nombre de este directorio será el mismo que el del repositorio. Sin embargo, si lo deseas, puedes elegir (renombrar) el nombre del directorio raíz.
Inicializa tu paquete npm dentro del directorio raíz del proyecto utilizando el comando npm init. Al inicializar, establece el nombre del paquete como @hexlet/code.
Crea el directorio bin y agrega el archivo brain-games.js en él.
Haz que al ejecutar el archivo bin/brain-games.js se muestre en la pantalla la siguiente línea:
node bin/brain-games.js
¡Bienvenido a Brain Games!
Resultado
Ahora hemos logrado la funcionalidad mínima: hemos creado un archivo que, al ejecutarlo desde la línea de comandos, muestra un mensaje de bienvenida en la pantalla.


Calidad del código
El seguimiento automático de la calidad del código es un atributo indispensable en el desarrollo moderno. En esta etapa, conectaremos varios servicios conocidos y configuraremos un linter que verificará el estilo de codificación.

CodeClimate
Cuando se organiza correctamente el desarrollo, la calidad del código (básica) se monitorea automáticamente. Incluso existen servicios en línea que se encargan de esto. Un representante destacado es CodeClimate. Es gratuito para proyectos de código abierto (como es nuestro caso) y el proceso de integración solo requiere unos pocos clics después del registro.

Enlaces
¿Qué es Markdown?
Tareas
Regístrate en CodeClimate (al registrarte, selecciona la opción Quality)
Conecta tu repositorio a CodeClimate
Coloca en el archivo README el distintivo Maintainability de tu proyecto (ver sección Repo Settings -> Extras -> Badges)
Eslint
En todos los lenguajes de programación existe el concepto de estilo de codificación. Desafortunadamente, no todos los desarrolladores están al tanto de esto y continúan escribiendo código como mejor les parece. Este enfoque suele causar molestias a otros miembros del equipo y, en general, afecta negativamente la motivación. Cuanto más rápido aprendas a escribir código siguiendo los estándares, mejor y más fácil será adaptarte después. Además, si los empleadores ven que en tus tareas de prueba (incluido este proyecto) utilizas enfoques comunes, estarán más dispuestos a contratarte que a un candidato que no sigue los estándares.

Los programas encargados de verificar el código según los estándares se llaman linters. Antes de comenzar a escribir cualquier código, es necesario configurar un linter. En JavaScript, se utiliza ampliamente eslint. Sin embargo, eslint en sí no es un conjunto de reglas. Es un programa capaz de verificar tu código según cualquier conjunto de reglas creado para él. El estándar de codificación más común en JavaScript fue creado por el equipo de desarrollo del servicio Airbnb, y es el que utilizaremos.

Nota: La configuración de Airbnb establece cómo funcionarán las reglas descritas aquí: https://eslint.org/docs/rules/. Tu tarea es escribir siempre código que cumpla con las reglas y no desactivarlas. Las únicas excepciones son las reglas 'no-console', que está diseñada para el navegador y no es relevante en el backend, y 'import/extensions', que prohíbe el uso de extensiones de archivo al importar, pero no es relevante al usar módulos ES. Debes desactivar estas reglas.

Enlaces
Linting
Eslint
Guía de estilo de Airbnb
NPX
Tareas
Instala los siguientes paquetes: eslint, eslint-config-airbnb-base, eslint-plugin-import
Configura correctamente el archivo .eslintrc.yml. Documentación. Consulta nodejs-package para comparar.
Crea la tarea make lint, que debe ejecutar npx eslint .
Conecta eslint a tu editor y asegúrate de que todo funcione. Es posible que necesites instalar eslint globalmente.
Corrige todos los errores que el linter muestre. Desactiva las reglas no-console (no es relevante para el desarrollo de nodejs) y import/extensions (para poder especificar extensiones de archivo al importar).

Juego: "Verificación de paridad"
Es necesario implementar el juego "Verificación de paridad". La idea del juego es la siguiente: se muestra al usuario un número aleatorio. Y él debe responder yes si el número es par, o no si es impar:

¡Bienvenido a Brain Games!
¿Cuál es tu nombre? Bill
¡Hola, Bill!
Responde "yes" si el número es par, de lo contrario responde "no".
Pregunta: 15
Tu respuesta: yes
En caso de que el usuario dé una respuesta incorrecta, el juego debe terminar y mostrar el siguiente mensaje:

'yes' es una respuesta incorrecta ;(. La respuesta correcta era 'no'.
¡Intentémoslo de nuevo, Bill!
En caso de que el usuario ingrese una respuesta correcta, se debe mostrar:

¡Correcto!
y pasar al siguiente número.

El usuario debe dar la respuesta correcta a tres preguntas seguidas. Después de un juego exitoso, se debe mostrar:

¡Felicidades, Bill!
La salida debe ser la siguiente:

brain-even

¡Bienvenido a Brain Games!
¿Cuál es tu nombre? Sam
¡Hola, Sam!
Responde "yes" si el número es par, de lo contrario responde "no".
Pregunta: 15
Tu respuesta: no
¡Correcto!
Pregunta: 6
Tu respuesta: yes
¡Correcto!
Pregunta: 7
Tu respuesta: no
¡Correcto!
¡Felicidades, Sam!
Cualquier entrada incorrecta se considera un error (por ejemplo, n) y es equivalente a una respuesta incorrecta.
Enlaces
No te repitas
YAGNI
KISS
Números mágicos
Tareas
Agrega un nuevo archivo ejecutable llamado brain-even en el directorio bin.
Implementa la lógica necesaria para el funcionamiento del juego.

Deja los archivos que agregamos anteriormente (src/cli.js, bin/brain-games.js) tal como están y no los mezcles con el resto del código. cli.js no está destinado a describir la lógica del juego.

Agrega otra entrada en la sección bin en el archivo package.json:

  "bin": {
    "brain-games": "bin/brain-games.js",
    "brain-even": "bin/brain-even.js"
  }
Realiza una prueba de depuración de la publicación y asegúrate de que después de instalar el paquete, el comando brain-even en la terminal ejecute el juego.

Graba una asciinema con un ejemplo de instalación del paquete, ejecución del juego, victoria y derrota del jugador. Publícala en el servicio y agrega el enlace a README.md.

Consejos
Los archivos ejecutables son usuarios de tu código, no tu código en sí.
El directorio bin está destinado solo para archivos ejecutables.
asciinema recording :  https://asciinema.org/a/7exLseRZYfm2n4EmRV6UOnKgF