# Pokeweb

## Índice

*  [1. Introducción](##-Introducción)

*  [2. Historias de Usuario](##-Historias-de-usuarios)

*  [3. Preámbulo](#1-preámbulo)

*  [3. Resumen del proyecto](#2-resumen-del-proyecto)

*  [4. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)

*  [5. Consideraciones generales](#4-consideraciones-generales)

*  [6. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

*  [7. Parte adicional-opcional](#6-parte-adicional-opcional)

*  [8. Consideraciones técnicas](#7-consideraciones-técnicas)

*  [9. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

*  [10. Checklist](#9-checklist)
  

## Introducción

Pokeweb es una página creada para los jugadores nuevos en el mundo de **Pokémon GO**, donde les ayudará a conocer los primeros 151 pokémon de la región de Kantō, con los datos necesarios para poder empezar y conocer al detalle cada uno, brindandole además algunos tips para iniciar.  

## Historias de usuarios

### Historia 1

Yo como jugador novato quiero ver todos los pokemones y en orden alfabético con su número, nombre, foto y tipo para conocerlos.

**Criterios de aceptación:**

 - El usuario al acceder a la página podrá visualizar a todos los pokemones
- El usuario podrá ordenar en orden alfabético A-Z / Z-A
- El usuario podrá ver su foto, su nombre y el tipo del pokémon.
- La página se podrá visualizar en cualquier dispositivo.

  

### Historia 2

  

Como jugador quiero poder filtrar por Tipo para conocer que pokémon es de tipo "agua", "fuego", entre otro.

  

**Criterios de aceptación:**

  

- El usuario podrá Filtrar por Tipo de pokémon
- El usuario podrá visualizar por lista los pokemones que cumplan el filtro.
- Se podrá visualizar en cualquier dispositivo.

  

### Historia 3

Como jugador quiero poder filtrar por Huevo para saber al momento de incubar xKM que pokemones me pueden aparecer.

  

**Criterios de aceptación:**

- El usuario podrá Filtrar por Huevo de aparición.
- El usuario podrá visualizar por lista los pokemones que cumplan el filtro.
- Se podrá visualizar en cualquier dispositivo.

  

### Historia 4

Como jugador quiero al clickear una tarjeta de pokémon entrar a ver el detalle del pokémon que me interesa para saber sus características y debilidades.

  

**Criterios de aceptación:**

- El usuario podrá clickear la tarjeta de pokemon e ingresar a una sección nueva
- El usuario podrá visualizar las características y debilidades del pokemon.
- La página se podrá visualizar en cualquier dispositivo.

  

### Historia 5

Como jugador quiero poder visualizar las evoluciones de cada pokémon para saber cuántas y cuáles son las evoluciones que tienen antes y después.

  

**Criterios de aceptación:**

- El usuario podrá visualizar cuales son las evoluciones del pokémon antes y después.
- El usuario podrá visualizar cada evolución con su número. nombre, imagen y tipo.
- Se podrá visualizar en cualquier dispositivo.

  

### Historia 6

Como jugador quiero saber cuántos caramelos necesita un pokémon para evolucionar.

 
**Criterios de aceptación:**

- El usuario podrá visualizar en sus características cuantos caramelos necesita para evolucionar.
- Se podrá visualizar en cualquier dispositivo.

#### Historia 7

Como jugador quiero saber el top 10 de frecuencia de aparición de los Pokémon para prepararme antes de salir.
 
**Criterios de aceptación:**

- El usuario podrá visualizar una tabla de posición con los que tienen mayor frecuencia de aparición.
- La página se podrá visualizar en cualquier dispositivo.

#### Historia 8

Como jugador nuevo quiero conocer algunos tips para que ayuden a subir de nivel, como evolucionar, entre otros.

**Criterios de aceptación:**

- El usuario podrá visualizar un listado de tips con Titulo, descripción y/o vídeo explicativo.
- La página se podrá visualizar en cualquier dispositivo.

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita a los usuarios
**visualizar, filtrar, ordenar, etc.**.

Te proponemos una serie de datos de diferentes _temáticas_ para que los
explores y decidas con cuál te interesa trabajar. Cada _set_ de datos viene con
información básica sobre los datos y su estructura, y una lista de las
necesidades de los usuarios que proviene de una investigación (_research_)
hecha por el equipo de Laboratoria.

Una vez que elijas, diseña tu proyecto intentando ofrecerle la mejor experiencia
posible para ayudarle a satisfacer sus necesidades.

Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)

* [Harry Potter](src/data/potter/potter.json).
  Este set de datos muestra la lista de los personajes del mundo de [Harry Potter: Wizards Unite](https://www.wizardingworld.com/), junto con sus respectivas características mencionadas en la serie de novelas de Harry Potter escrita por la autora británica J.K.Rowling.
  - [Investigación con jugadores de Harry Potter: Wizards Unite](src/data/potter/README.md)

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual y de equipo.

### UX
- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener feedback e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [ ] Planear y ejecutar tests de usabilidad.

### HTML y CSS
- [ ] Entender y reconocer por qué es importante el HTML semántico.
- [ ] Identificar y entender tipos de selectores en CSS.
- [ ] Entender como funciona  `flexbox` en CSS.
- [ ] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM
- [ ] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [ ] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript
- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [ ] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [ ] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [ ] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Utilizar linter para seguir buenas prácticas (ESLINT).

### Soft skills
- [ ] **Planificación, organización y manejo del tiempo** Organizarse utilizando historias de usuario, haciendo una estimación general de los tiempos que se necesitarán para la realización del proyecto. Conocer las ceremonias y artefactos ágiles (sprint planning, dailys, retrospectiva, tablero al menos, etc) a pesar de que no se utilicen con regularidad. 

- [ ] **Trabajo en equipo** Trabajar con otros de forma colaborativa y en base a un objetivo común, entregando ideas para la construcción del proyecto

- [ ] **Autoaprendizaje** Demostrar interés y adquirir nuevos conocimientos autónomamente, estudiando de manera independiente, lo que se traduce, en que cuando es necesario, la estudiante buscará aclarar conceptos y resolver dudas sobre la materia.

- [ ] **Presentaciones** Utilizar ciertas estrategias para hablar en público (tono y ritmo de voz adecuado, contacto visual con el público, interacción con medios de presentación), que permitan asegurar un mediano entendimiento de la audiencia.

- [ ] **Adaptabilidad** Afrontar los cambios inesperados o nuevos desafíos con una actitud positiva, aunque no necesariamente se logre accionar o adaptarse de la mejor manera a los diferentes contextos.

- [ ] **Solución de problemas** Trabajar en la búsqueda y en la elaboración de soluciones alternativas a problemas de mediana complejidad.

- [ ] **Responsabilidad** Demostrar actitud de compromiso, reflejandolo en la entrega de trabajo a tiempo, llegando a la hora acordada y/o avisando cuando no se pueda asistir.

- [ ] **Dar y recibir feedback** Escuchar los comentarios y críticas de los demás de manera respetuosa, y/o comunicar a los demás las opiniones de forma constructiva.

- [ ] **Comunicación eficaz** Comunicar ideas a los demás cuando es necesario, aunque no siempre se fomenten de manera proactiva estas instancias de comunicación.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 3 semanas (15 días hábiles).

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la
[identidad gráfica](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE)
correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Parte adicional-opcional

Si **terminaste** con todo lo anterior y te queda tiempo, intenta explorar y
completar parte o todo de lo siguiente. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.

* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).

* 100% Coverage de pruebas unitarias.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── potter
|  |     ├── potter.js
|  |     └── potter.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

Encontrarás 1 etiqueta inicial, la cual si deseas puedes borrar y empezar de cero:

```
 <div id="root"></div>
```

### `src/main.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos). Es decir,
en este archivo deberás invocar a tus funciones exportadas en el boilerplate,
según sea necesario para realizar operaciones como creación de nodos,
registro de manejadores de eventos (_event listeners_ o _event handlers_), ....

En este archivo encontrarás una serie de _sentencias_ `import`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _sentencias_. Cada una de estas sentencias importará un
objeto, el cual ya se encuentra exportado en el boilerplate. Este objeto
contiene la data correspondiente a esa fuente de datos.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* Y así sucesivamente, según tu proyecto en particular.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-parte-adicional-opcional)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

***

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* [Investigación con usuarios / entrevistas](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/diseno-visual)

#### Desarrollo Front-end

* [Unidad de testing en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS.](https://lms.laboratoria.la/cohorts/scl-2020-03-bc-core-scl013/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
