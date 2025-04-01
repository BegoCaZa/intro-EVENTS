// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleh1Element = document.getElementById('title-h1');

const handleMouseOver = () => {
  titleh1Element.textContent = 'Quita de encima!!!';
};

const handleMouseOff = () => {
  titleh1Element.textContent = 'Soy un titulo'; //no puedo recuperar textos `por que lo sobre escribi
};

titleh1Element.addEventListener('mouseover', handleMouseOver);
titleh1Element.addEventListener('mouseout', handleMouseOff);

//- Crea un botón con la etiqueta <button> en tu página HTML con el texto "Click me" y añadele un evento de click. Al hacer click tendrá que poner "clicked x times" donde x será el número de veces que hiciste click en él.
 const buttonElement = document.getElementById('clickMe-button');

let clickCount = 0;
const handleClick = () => {
  clickCount++;
  buttonElement.textContent = `Clicked ${clickCount} times`;
};
buttonElement.addEventListener('click', handleClick);

//- Crea un <p> con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control.

const keyPressElement = document.getElementById('keyPress-p');

const keyDown = (event) => {//tengo que especificar el evento para que lea la key
  keyPressElement.textContent = `Has pulsado la tecla ${event.key}`; //cambia el texto
};
const keyUp = () => { //callback de retorno
  keyPressElement.textContent = 'Esperando entrada de teclado...';
};
document.addEventListener('keydown', keyDown); //llamada del evento
document.addEventListener('keyup', keyUp); //llamada del evento

//- Crea un array con 5 palabras, las que tú quieras. Añade un h2 a tu HTML. Añade dos botones con el texto previous y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera al pulsar el botón next y cuando estés en la primera podrás volver a la última haciendo click al botón previous.

const changeTitleElement = document.getElementById('changeTitle');
const previousButtonElement = document.getElementById('previous-button');
const nextButtonElement = document.getElementById('next-button');

const wordsArray = ['Adrian', 'lucha', 'contra', 'la burocracia', 'española'];
let currentIndex = 0; //indice de la palabra actual

// console.dir(nextButtonElement);
// console.dir(previousButtonElement);
// console.dir(changeTitleElement);

const nextButton = () => {
  currentIndex++; //incremento el indice
  if (currentIndex >= wordsArray.length) { //cuando llega al final del array
  currentIndex = 0; //vuelvo al principio
  }
  changeTitleElement.textContent = wordsArray[currentIndex]; //cambio el texto del h2
}
//PORQUE SALTA LA PRIMER POSICION DEL ARRAY AL PRINCIPIO?


const previousButton = () => {
  currentIndex--; //retrocede el indice
  if (currentIndex < 0) { //cuando llega al final del array
  currentIndex = wordsArray.length; //salta al final
  }
  changeTitleElement.textContent = wordsArray[currentIndex]; //cambio el texto del h2
}
//PORQUE DEJA UN MOMENTO EN BLANCO

nextButtonElement.addEventListener('click', nextButton);
previousButtonElement.addEventListener('click', previousButton);

