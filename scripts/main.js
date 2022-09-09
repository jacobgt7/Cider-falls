//import all neccessary functions
import { areasToHTML } from "./areas.js";
import { guestsToHTML } from "./guests.js";
import { servicesToHTML } from "./services.js"


//Variables to contain each parent element for html strings from imported functions.
let areasParentElement = document.querySelector(".areas")
let guestsParentElement = document.querySelector(".guests")
let servicesParentElement = document.querySelector(".services")
//Use innerHTML on parent elements to send strings using callback functions to index.html.
areasParentElement.innerHTML = areasToHTML()
guestsParentElement.innerHTML = guestsToHTML()
servicesParentElement.innerHTML = servicesToHTML()