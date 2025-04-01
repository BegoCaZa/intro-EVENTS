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
