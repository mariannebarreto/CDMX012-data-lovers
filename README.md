# Proyecto Data Lovers - Dex-Rick & Morty

## Índice 
* [1. Definición del producto](#1-definici%C3%B3n-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [5. Testeos de usabilidad](#5-testeos-de-usabilidad)
* [6. Agradecimientos](#6-agradecimeintos)


***

## 1. Definición del producto
Nuestro proyecto se desarrolló a partir de la data de “Rick & Morty”, serie animada americana dirigida a adolescentes y adultos. Por su temática encontramos muy interesante el hecho de ser un fandom (18-35 años aprox.), que en su mayoría apela a cierta nostalgia a los juegos, películas y series retro, por ello fue muy importante para nosotras darle a la web ese estilo característico.
Además de la información proporcionada por Laboratoria, decidimos realizar un [formulario](https://es.surveymonkey.com/r/XX37JZW) para conocer algunas de las preferencias del fandom de la serie, principalmente enfocado en las necesidades de usabilidad e interacción con la interfaz (UX).



## 2. Historias de usuario

Parte fundamental para aterrizar el proyecto , fue el definir los puntos necesarios a cubrir (arrojados en  la encuesta) y como podíamos utilizarlos en conjunto con la data proporcionada, por lo que podemos encontrar las siguientes Historias de Usuario:

### Historia de Usuario 1
**Yo como usuari@ de Rick & Morty, quiero entrar al mundo de la serie y visualizar los personajes para conocerlos**

#### Criterios de Aceptación
* Diseñar una página con un estilo ad hoc a la serie agregando un toque retro ochentero.
* Debe ser visualmente coherente con la temática espacial que ofrece la serie.
* El usuario debe poder navegar de forma sencilla e intuitiva. 
* Mostrar en página a los personajes con su respectiva imagen e información.

#### Definición de terminado
* Crear una función que permita mostrar la información de los personajes (JavaScript)
* Crear contenedor para cada uno de los personajes, donde aparezca su imagen e información (HTML)
* Aplicar estilo a la página según los criterios de aceptación.
* Realizar test unitario
* El código se encuentra en GitHub.

### Historia de Usuario 2
**Yo como usuari@ de Rick & Morty, quiero una interfaz de bienvenida y conocer datos característicos de los personajes con su imagen, así como poder buscarlos de diferentes formas**

#### Criterios de Aceptación
* Se muestra página de bienvenida (portal) y al dar click el usuario accede a la página de personajes.
* Se muestran las tarjetas de los personajes con imagen e información.
* El usuario puede elegir entre diferentes filtros para buscar la información. 
* El diseño de la página es intuitivo y fácil de usar.
#### Definición de terminado
* Al cargar la página se renderizan los personajes del archivo. 
* Los personajes son responsivos y se adaptan en escritorio y celuar.
* En la segunda página se muestra la data filtrada dentro de contenedores en un grid y se trabaja en CSS con el diseño de los correspondientes módulos flexbox.
* Podemos ver un filtrado aun en botón sencillo de A-Z verificando que la acción se cumpla, main.js, data.js.
* Hacer un test de usabilidad. 

### Historia de Usuario 3
**Yo como usuari@ de Data Lovers quiero filtrar la informacion de A-Z, de Z-A, Male, Female, Specie, Top10 y que numero de personajes son mujeres**

#### Criterios de Aceptación
* El usuario puede elegir diferentes filtros para buscar la información 
* La pagina cuenta con un menú de opciones de los diferentes filtrados.
* Veo el ordenado de manera dinámica.

#### Definición de terminado
* Escribir funciones que permitan filtrar la data según lo requerido.
* Ordenar la data utilizando SORT
* Escribir test unitario de las funciones que ordenan la data
* El código está GitHub

### Historia de Usuario 4
**Yo como usuari@ de Data Lovers quiero visualizar en mi dispositivo móvil,  un TOP TEN de los personajes con mayor aparición**

#### Criterios de Aceptación
* Ver estadísticamente el top 10 de personajes. 
* La información de los personajes se visuliza en computadora y disposiivo móvil (RESPONSIVE)
* Es visualmente atractivo y fácil de usar.

#### Definición de terminado
* Crear una función que recorre la dara y arroje el top 10 de personajes con mayor aparición.
* Imprimir el resultado en el DOM
* El código de las programadoras debe estar integrado en GitHub a través de un PR (pull request).
* Haber escrito el test de la(s) función(es) utilizadas.

## 3. Prototipo de baja fidelidad
Los prototipos realizados en esta etapa del proyecto se hicieron basados en la información que teníamos recabada. El primero fue un acercamiento a las ideas mas locas que se nos podían ocurrir y el segundo ya un poco más aterrizado a las secciones que tendrá la página. 
![Prototipo Low 1](/src/assets/prototipoLow1.jpeg)
![Prototipo Low 2](/src/assets/prototipoLow2.jpeg)

## 4. Prototipo de alta fidelidad
Continuando con la idea de crear secciones, reflejado en los bocetos anteriores, se trabajó en un [prototipo de alta fidelidad](https://www.figma.com/proto/7SYhVZosKhp56iL0cTP1pe/Dex-Rick-and-Morty?node-id=11%3A7&scaling=contain&page-id=0%3A1&starting-point-node-id=11%3A7&show-proto-sidebar=1) en Figma. 

Tomando en cuenta los diferentes feedbacks de usuarios, decidimos simplificar.  Si bien procuramos ser muy fieles al diseño original, elegimos eliminar las diversas secciónes y solo quedarnos el portal de bienvenida y la segunda página de información. Esto para que la usabilidad fuera menos compleja y llegar más directo a la información.
En vez de la página que contenía los botones de cada sección, cambiamos por un menú de navegación en la parte superior de la pantalla,  que contiene botones y filtros.

## 5. Testeos de usabilidad
Esta parte fue esencial, ya que conforme avanzábamos en el proceso, fuimos recibiendo feedback de diversas personas: coaches, compañeres de Laboratoria, familia, amigos, etc.,  y concluimos los siguientes cambios: 

* La idea inicial contaba con varias páginas para navegar. Dependiendo de la información que querías buscar, era el portal al que te debías dirigir e ingresar para ver renderizada la data en tu pantalla. Los usuarios indicaron que buscaban acceder de una forma mas sencilla a la información. 
* Pretendíamos crear un carrusel de tarjetas de los personajes, sin embargo en el feedback se nos sugirió presentar las tarjetas de manera sencilla pero visualmente atractiva. 
* Tomando todo lo anterior, cambiamos el rumbo del proyecto, dando como resultado el producto final que mostramos. 

## 6. Agradecimientos
La dupla 16, conformada por Mariana Barreto y Elizabeth Tejeda, agradece primeramente al coach Carlos Mendoza , por todo su apoyo y acompañàmiento durante "Data Lovers", pues sin él no habríamoa comprendido la esencia de este reto. A nuestras compañèras Niza, Perla, Dany y Lili, por regalarnos su tiempo cuando ellas también estaban pasando el garabato. Y a todo el equipo de Laboratoria, por creer en nuestro potencial y guiarnos con paciencia y dedicación. 