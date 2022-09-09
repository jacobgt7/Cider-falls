//Import services from database and represent in html.
import { getServices, getServicesByLocation, getAreas } from "./database.js";

//Add event listener to display areas where service is offered when a service is clicked.
document.addEventListener(
    "click",
    (e) => {
        //Store item clicked as a variable.
        const itemClicked = e.target
        //Check if item clicked id starts with "service".
        if (itemClicked.id.startsWith("service")) {
            //IF it does, store number portion of id as a variable called primaryKey.
            const [, primaryKey] = itemClicked.id.split("--")
            //iterate through servicesByLocation array and match primaryKey to serviceID.
            let matchingService = null
            //iterate through services array and match primaryKey to service.id.
            for (let service of services) {
                if (service.id === parseInt(primaryKey)) {
                    matchingService = service.name

                    //services.find((service) => service.id === parseInt(primaryKey))**POSSIBLE SOLUTION FOR ABOVE CODE
                }
            }
            let matchingAreas = []
            for (let serviceByLocation of servicesByLocation) {
                if (serviceByLocation.serviceID === parseInt(primaryKey)) {
                    //If match, create a varaible to store matching areas as an array of strings.
                    // iterate through areas array and match id to areaID.
                    for (let area of areas) {
                        if (area.id === serviceByLocation.areaID) {
                            // IF match, push area name to array.
                            matchingAreas.push(area.name)
                        }
                    }
                }
            }
            // Window alert joined array with format: "(service name) is available in (area names)."\
            window.alert(`${matchingService} is available in ${matchingAreas.join(" and ")}`)
        }
    }
)


const services = getServices()
const servicesByLocation = getServicesByLocation()
const areas = getAreas()

//Export Function generates a list of all park services above areas grid in html.
export const servicesToHTML = () => {
    //define variable containing opening html.
    let html = `<h2>Park Services</h2> <div class="services__container">`
    //Iterate services array and append string with html and id for each service object name.
    for (let service of services) {
        html += `<div class="service" id="service--${service.id}">${service.name}</div>`
    }
    html += `</div>`
    //Return html string.
    return html
}



//Function matches service to area and returns html list items for areas.
//Takes id from area object as an argument
export const servicesIntoAreasHTML = (currentAreaId) => {
    //Define a variable containing a string with opening HTML tags.
    let html = ""
    //A for loop which iterates the servicesByLocation array and and matches currentAreaId
    // with with serviceID and appends string with html for each matching object found in services array.
    for (let serviceByLocation of servicesByLocation) {
        if (serviceByLocation.areaID === currentAreaId) {
            for (let service of services) {
                if (service.id === serviceByLocation.serviceID) {
                    html += `<li>${service.name}</li>`
                }
            }
        }
    }
    //return string.
    return html
}
