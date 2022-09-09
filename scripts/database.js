//Module contains all of the raw data as arrays of objects. 
//Contains functions for exporting copies of data to other modules.

const database = {
    guests: [
        {
            id: 1,
            name: "Tom Bombadill",
            areaID: 4
        },
        {
            id: 2,
            name: "Frodo Baggins",
            areaID: 1
        },
        {
            id: 3,
            name: "Gandalf Grey",
            areaID: 5
        },
        {
            id: 4,
            name: "Lord Sauron",
            areaID: 2
        },
        {
            id: 5,
            name: "Saruman White",
            areaID: 6
        },
        {
            id: 6,
            name: "Sam Gamgee",
            areaID: 3
        }
    ],
    areas: [
        {
            id: 1,
            name: "Lodge",
            location: "northwest"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: "north"
        },
        {
            id: 3,
            name: "Chamfort River",
            location: "northeast"
        },
        {
            id: 4,
            name: "Gander River",
            location: "southwest"
        },
        {
            id: 5,
            name: "Campgrounds",
            location: "south"
        },
        {
            id: 6,
            name: "Pine Bluffs Trails",
            location: "southeast"
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        },
        {
            id: 2,
            name: "Canoeing"
        },
        {
            id: 3,
            name: "Fishing"
        },
        {
            id: 4,
            name: "Hiking"
        },
        {
            id: 5,
            name: "Picknicking"
        },
        {
            id: 6,
            name: "Rock Climbing"
        },
        {
            id: 7,
            name: "Lodging"
        },
        {
            id: 8,
            name: "Parking"
        },
        {
            id: 9,
            name: "Information"
        },
        {
            id: 10,
            name: "Zip Lines"
        }

    ],
    servicesByLocation: [
        {
            id: 1,
            areaID: 1,
            serviceID: 7
        },
        {
            id: 2,
            areaID: 1,
            serviceID: 8
        },
        {
            id: 3,
            areaID: 1,
            serviceID: 9
        },
        {
            id: 4,
            areaID: 1,
            serviceID: 5
        },
        {
            id: 5,
            areaID: 2,
            serviceID: 4
        },
        {
            id: 6,
            areaID: 2,
            serviceID: 5
        },
        {
            id: 7,
            areaID: 2,
            serviceID: 6
        },
        {
            id: 8,
            areaID: 3,
            serviceID: 1
        },
        {
            id: 9,
            areaID: 3,
            serviceID: 2
        },
        {
            id: 10,
            areaID: 3,
            serviceID: 3
        },
        {
            id: 11,
            areaID: 4,
            serviceID: 3
        },
        {
            id: 12,
            areaID: 4,
            serviceID: 4
        },
        {
            id: 13,
            areaID: 5,
            serviceID: 9
        },
        {
            id: 14,
            areaID: 5,
            serviceID: 7
        },
        {
            id: 15,
            areaID: 5,
            serviceID: 8
        },
        {
            id: 16,
            areaID: 6,
            serviceID: 4
        },
        {
            id: 17,
            areaID: 6,
            serviceID: 5
        },
        {
            id: 18,
            areaID: 6,
            serviceID: 10
        }

    ]
}
//Funtions using .map method to make and return a copy of each array.
export const getGuests = () => database.guests.map((guest) => ({ ...guest }))

export const getAreas = () => database.areas.map((area) => ({ ...area }))

export const getServices = () => database.services.map((service) => ({ ...service }))

export const getServicesByLocation = () => database.servicesByLocation.map((serviceByLocation) => ({ ...serviceByLocation }))