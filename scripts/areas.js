//This module imports copy of data from database and represents areas as html.
import { getAreas } from "./database.js";
import { servicesIntoAreasHTML } from "./services.js";
const areas = getAreas()
//Function to represent areas in html string.

export const areasToHTML = () => {
    //Define a variable containing a string with opening HTML tags.
    let html = `<h2>Park Areas</h2> <div class="areas__container">`
    //A for loop which iterates the array and appends string with html for each object.
    //A callback to append list items for each service in current area.
    for (let area of areas) {
        html += `
        <div class="area"> 
            <h2 id="area--${area.id}">${area.name} (${area.location})</h2> 
            <h3>Services Offered:</h3> 
            <ul>
                ${servicesIntoAreasHTML(area.id)}
            </ul>
        </div>`
    }
    html += `</div>`
    //return string.
    return html
}