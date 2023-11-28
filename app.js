/**
 * console.log :
 * permet d'afficher des information 
 * dans la console du navigateur
 */ 
// console.log('Hello world !');

// console.log(window);
// console.log(window.alert("Bonjour tout le monde !"));
// console.log(window.document);

// récupération de l'élement input firstColor
const firstColorElt = document.getElementById('firstColor');
// console.log(firstColorElt);
// console.log(firstColorElt.value);

// récupération de l'élement input secondColor
const secondColorElt = document.getElementById('secondColor');
// console.log(secondColorElt);
// console.log(secondColorElt.value);

// récupération de l'élement body
const bodyElt = document.querySelector('body');
// console.log(bodyElt);
// bodyElt.style = 'background: #000000';

/**
 * ecoute d'évenement sur les inputs
 */
// écoute d'évenement sur l'input firstcolor
firstColorElt.addEventListener('input', function() {
    // console.log(firstColorElt.value);
    
    // utilisation des bactic
    bodyElt.style = `background: linear-gradient(to right, ${firstColorElt.value}, ${secondColorElt.value})` ;
});

// écoute d'évenement sur l'input secondColor
secondColorElt.addEventListener('input', function() {
    // console.log(secondColorElt.value);

    // utilisation de la concaténation
    bodyElt.style = "background: linear-gradient(to right,"+ firstColorElt.value +", "+ secondColorElt.value +")";
});