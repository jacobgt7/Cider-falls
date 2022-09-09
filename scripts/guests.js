//Import data from database and represent guests in html.
import { getGuests, getAreas } from "./database.js";

//add event listener so that when the title of an area is clicked the number of guests in that area is displayed.
document.addEventListener(
    "click",
    (e) => {
        //Store click event target in a variable
        const itemClicked = e.target
        //If event target id starts with "area".
        if (itemClicked.id.startsWith("area")) {
            //Split target id and store number in a variable named primaryKey.
            const [, primaryKey] = itemClicked.id.split("--")
            //Iterate through areas array and find a match based on stored number.
            for (let area of areas) {
                if (area.id === parseInt(primaryKey)) {
                    //define a variable with value set to 0.
                    let numOfGuests = 0
                    //Iterate through guests and and find a match for areaID.
                    for (let guest of guests) {
                        if (guest.areaID === area.id) {
                            numOfGuests++
                            //For each match add 1 to number variable.
                        }
                    }
                    window.alert(`There are ${numOfGuests} guests in this area.`)
                }

            }
        }
    }
)
//Window alert the number of guests.


const guests = getGuests()
const areas = getAreas()
//Export function which represents guests in html.
export const guestsToHTML = () => {
    //Define a variable containing a string with opening HTML tags.
    let html = `<h2>Current Guests</h2> <ul>`
    //A for loop which iterates the array and appends string with html for each object.
    for (let guest of guests) {
        html += `<li>${guest.name}</li>`
    }
    //Append string with closing html tags.
    html += `</ul>`
    //return string.
    return html
}