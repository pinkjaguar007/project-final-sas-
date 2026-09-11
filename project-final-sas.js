
var prompt = require('prompt-sync')();


// here is an array to store the tickets with their infos

const tickets = [
    {
        id: 1,
        name: "ahmed",
        tripID: 1,
        seatNumber: 1,
        price: 25,
        destination: "Youssoufia",
        departure: "Safi",
        departureTime: "07:30",
        arrivalTime: "08:30"
    },
    {
        id: 2,
        name: "fatima",
        tripID: 1,
        seatNumber: 2,
        price: 25,
        destination: "Youssoufia",
        departure: "Safi",
        departureTime: "07:30",
        arrivalTime: "08:30"
    },
    {
        id: 3,
        name: "youssef",
        tripID: 1,
        seatNumber: 3,
        price: 25,
        destination: "Youssoufia",
        departure: "Safi",
        departureTime: "07:30",
        arrivalTime: "08:30"
    },
    {
        id: 4,
        name: "khadija",
        tripID: 1,
        seatNumber: 4,
        price: 25,
        destination: "Youssoufia",
        departure: "Safi",
        departureTime: "07:30",
        arrivalTime: "08:30"
    },
    {
        id: 5,
        name: "omar",
        tripID: 2,
        seatNumber: 1,
        price: 90,
        destination: "Marrakech",
        departure: "Safi",
        departureTime: "08:00",
        arrivalTime: "10:30"
    },
    {
        id: 6,
        name: "sara",
        tripID: 2,
        seatNumber: 2,
        price: 90,
        destination: "Marrakech",
        departure: "Safi",
        departureTime: "08:00",
        arrivalTime: "10:30"
    },
    {
        id: 7,
        name: "yassine",
        tripID: 3,
        seatNumber: 1,
        price: 140,
        destination: "Casablanca",
        departure: "Safi",
        departureTime: "09:00",
        arrivalTime: "13:00"
    },
    {
        id: 8,
        name: "nour",
        tripID: 3,
        seatNumber: 2,
        price: 140,
        destination: "Casablanca",
        departure: "Safi",
        departureTime: "09:00",
        arrivalTime: "13:00"
    },
    {
        id: 9,
        name: "hamza",
        tripID: 4,
        seatNumber: 1,
        price: 65,
        destination: "Marrakech",
        departure: "Youssoufia",
        departureTime: "09:15",
        arrivalTime: "11:00"
    },
    {
        id: 10,
        name: "salma",
        tripID: 4,
        seatNumber: 2,
        price: 65,
        destination: "Marrakech",
        departure: "Youssoufia",
        departureTime: "09:15",
        arrivalTime: "11:00"
    },
    {
        id: 11,
        name: "karim",
        tripID: 5,
        seatNumber: 1,
        price: 110,
        destination: "Casablanca",
        departure: "Youssoufia",
        departureTime: "10:00",
        arrivalTime: "13:30"
    },
    {
        id: 12,
        name: "imane",
        tripID: 5,
        seatNumber: 2,
        price: 110,
        destination: "Casablanca",
        departure: "Youssoufia",
        departureTime: "10:00",
        arrivalTime: "13:30"
    },
    {
        id: 13,
        name: "rachid",
        tripID: 6,
        seatNumber: 1,
        price: 120,
        destination: "Casablanca",
        departure: "Marrakech",
        departureTime: "11:30",
        arrivalTime: "14:30"
    },
    {
        id: 14,
        name: "amina",
        tripID: 6,
        seatNumber: 2,
        price: 120,
        destination: "Casablanca",
        departure: "Marrakech",
        departureTime: "11:30",
        arrivalTime: "14:30"
    },
    {
        id: 15,
        name: "said",
        tripID: 7,
        seatNumber: 1,
        price: 150,
        destination: "Rabat",
        departure: "Marrakech",
        departureTime: "12:00",
        arrivalTime: "16:00"
    },
    {
        id: 16,
        name: "houda",
        tripID: 7,
        seatNumber: 2,
        price: 150,
        destination: "Rabat",
        departure: "Marrakech",
        departureTime: "12:00",
        arrivalTime: "16:00"
    },
    {
        id: 17,
        name: "mehdi",
        tripID: 8,
        seatNumber: 1,
        price: 40,
        destination: "Rabat",
        departure: "Casablanca",
        departureTime: "14:00",
        arrivalTime: "15:15"
    },
    {
        id: 18,
        name: "zineb",
        tripID: 8,
        seatNumber: 2,
        price: 40,
        destination: "Rabat",
        departure: "Casablanca",
        departureTime: "14:00",
        arrivalTime: "15:15"
    },
    {
        id: 19,
        name: "anass",
        tripID: 9,
        seatNumber: 1,
        price: 55,
        destination: "Kenitra",
        departure: "Casablanca",
        departureTime: "15:00",
        arrivalTime: "16:45"
    },
    {
        id: 20,
        name: "laila",
        tripID: 9,
        seatNumber: 2,
        price: 55,
        destination: "Kenitra",
        departure: "Casablanca",
        departureTime: "15:00",
        arrivalTime: "16:45"
    }
]
// here is an array to store the trips with their infos

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];



// here is an array to store the canceled seats with their trip id and seat number
const canceledSeats = []

// here is a variable to store the highest ticket id in the tickets array
let highestId = 0;
for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].id > highestId) {
        highestId = tickets[i].id;
    }
}

let nextticketid = highestId;

//RAILWAY MANAGER
// =================================

//1. Display the trips
//2. Buy a ticket
//3. Display the tickets
//4. Cancel a ticket
//5. Search for a ticket
//6. Filter the trips
//7. Sort the trips
//0. Exit
//Your choice:
//*


// here is the function to call the menu everytime 

function showmenu() {
    console.log("\n=================================");
    console.log("       RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Show trips");
    console.log("2. Buy a ticket");
    console.log("3. Show tickets");
    console.log("4. Cancel a ticket");
    console.log("5. Search for a ticket");
    console.log("6. Filter trips");
    console.log("7. Sort trips");
    console.log("8. Statistics");
    console.log("0. Quite");

}

// here is a while loop to let the user choose whatever he wants 
let ongoing = true

while (ongoing) {

    showmenu();
    const choice = prompt("Your choice: ");

    switch (choice) {
        case "1":
            Showtrips();
            break;
        case "2":
            Buyaticket();
            break;
        case "3":
            Showtickets();
            break;
        case "4":
            Cancelaticket();
            break;
        case "5":
            Searchforaticket();
            break;
        case "6":
            Filtertrips();
            break;
        case "7":
            Sorttrips();
            break;
        case "8":
            Statistics();
            break;
        case "0":
            console.log("\ngood bye  !");
            ongoing = false;
            break;
        default:
    }
}



// function show trips

function Showtrips() {


    // here we loop through the trips array to display all the trips with their id number


    for (let i = 0; i < trips.length; i++) {
        console.log("ID : " + trips[i].id);
        console.log("Departure : " + trips[i].departure);
        console.log("Destination : " + trips[i].destination);
        console.log("Departure Time : " + trips[i].departureTime);
        console.log("Arrival Time : " + trips[i].arrivalTime);
        console.log("Price : " + trips[i].price);
        console.log("Available Seats : " + trips[i].availableSeats);
        console.log("-----------------------------");
    }


}



// function to let the user buy a ticket by adding his name and choosing which trip does he need BY trip id 
// so we go through the loop to access the array then we do trips[i].id === ticket id 
// to access the id number from the object inside the array to compare if it does exist 

function Buyaticket() {

    let name = prompt("enter you name ")
    let tripid = Number(prompt("enter the trip ID "))
    name = name.toLowerCase()
    let tripID = false

    for (let i = 0; i < trips.length; i++) {



        if (trips[i].id == tripid) {

            tripID = true

            // here we compare if the trip id exist and its actully exist in the trips array 

            console.log("yes this trip id exist")

            // here we check if there is any available seats

            if (trips[i].availableSeats > 0) {


                //  look for a canceled seat taht belongs THIS trip


                let reused = -1;

                // we loop through the canceled seats array to find if there is any canceled seat that belongs to this trip


                for (let k = 0; k < canceledSeats.length; k++) {


                    if (canceledSeats[k].tripID === tripid) {

                        // if we find a canceled seat that belongs to this trip we store its index in the reused variable 

                        reused = k;
                        break;
                    }
                }

                if (reused !== -1) {

                    //found one a cnaceled seat reuse it

                    seatNumber = canceledSeats[reused].seatNumber;

                    canceledSeats.splice(reused, 1);

                    // remove it from the pool so it's only handed out once

                } else {
                    // no canceled saets get  back to the normal formula 

                    seatNumber = 50 - trips[i].availableSeats + 1;
                }


                nextticketid++;
                // here we decrement the available seats by 1 for the new ticket
                trips[i].availableSeats--;
                // here we decrement the available seats by 1 for the new ticket

                //this is for the seats we have 50 - 50 which is = 0 + 1 for the new seat 


                let ticket = {


                    id: nextticketid,
                    name: name,
                    tripID: trips[i].id,
                    seatNumber: seatNumber,
                    price: trips[i].price,
                    destination: trips[i].destination,
                    departure: trips[i].departure,
                    departureTime: trips[i].departureTime,
                    arrivalTime: trips[i].arrivalTime


                    // here we create a new ticket object with the infos of the trip and the user input

                }

                tickets.push(ticket)

                console.log("ticket created")
                console.log({ ticket })// we print the ticket to the user

                // // here we push the new ticket to the tickets array and display it





            }


            else if (trips[i].availableSeats === 0) {

                console.log(" no available seats for this trip")

                // if there is no available saets " no available seat for this trip will be printed to the user "

            }





        }

    }



    if (tripID) {
        console.log("trip id exist")


    }
    else {

        console.log("trip id doesnt exist")
    }

}

//after buying this is option 3 to show all bought tickets 

function Showtickets() {


    // here we loop through the tickets array to display all the tickets with their infos
    for (let i = 0; i < tickets.length; i++) {
        console.log("ID :" + tickets[i].id);
        console.log("name :" + tickets[i].name);
        console.log("tripID :" + tickets[i].tripID);
        console.log("seatNumber :" + tickets[i].seatNumber);
        console.log("price :" + tickets[i].price);
        console.log("destination :" + tickets[i].destination);
        console.log("departure :" + tickets[i].departure);
        console.log("departureTime :" + tickets[i].departureTime);
        console.log("arrivalTime :" + tickets[i].arrivalTime);

    }


}

function Cancelaticket() {

    let ticketid = Number(prompt("enter the ticket ID to cancel it "))
    let ticketFound = false

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].id === ticketid) {

            // here we compare if the ticket id exist 
            ticketFound = true;
            console.log("ticket found")



            // here we loop through the trips array to find the trip id of the ticket to increment the available seats by 1


            for (let j = 0; j < trips.length; j++) {

                if (trips[j].id === tickets[i].tripID)



                // here we compare if the trip id of the ticket exist in the trips array 
                // to increment the available seats by 1
                // its like we check the id of the trip mathces the trip id on the ticket   
                {
                    trips[j].availableSeats++;

                    // here we increment the available seats by 1 for the trip of the ticket to 
                    // be canceled for the new ticket to be created

                    canceledSeats.push({ tripID: tickets[i].tripID, seatNumber: tickets[i].seatNumber })

                    // remember this exact seat is now free, for this exact trip
                    // so we push the trip id and the seat number to the canceledSeats array to keep track of the canceled seats

                    console.log("ticket canceled")
                    tickets.splice(i, 1);
                    break;
                }
            }
        }




    }

    if (!ticketFound) {
        console.log("ticket not found")

    }


}




function Searchforaticket() {

    let name = prompt("enter the ticket name to search for it ")
    name = name.toLowerCase()

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].name === name) {
            console.log("ticket found")
            console.log(tickets[i])

        }
        else {
            console.log("ticket not found")
        }
    }
}

function Filtertrips() {

    let departurecity = prompt("enter departure city")

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].departure === departurecity) {

            console.log(trips[i].departure)
            console.log(trips[i].destination)
            console.log(trips[i].price)

        }

    }



}

function Sorttrips() {

    for (let i = 0; i < trips.length - 1; i++) {

        for (let j = 0; j < trips.length - 1 - i; j++) {

            if (trips[j].price > trips[j + 1].price) {
                let temp = trips[j]
                trips[j] = trips[j + 1]
                trips[j + 1] = temp
            }

        }
    }

    for (let i = 0; i < trips.length; i++) {
        console.log(trips[i].departure + " -> " + trips[i].destination + " : " + trips[i].price + " DH")
    }

}

function Statistics() {

    // 1. Total number of tickets sold
    console.log("Total number of tickets: " + tickets.length)

    // 2. Total revenue
    let totalRevenue = 0;
    for (let i = 0; i < tickets.length; i++) {
        totalRevenue += tickets[i].price;
    }
    console.log("Total revenue: " + totalRevenue + " DH")

    if (tickets.length === 0) {
        return;
    }

    // 3. Best-selling trip
    let countByTrip = {};
    for (let i = 0; i < tickets.length; i++) {
        let id = tickets[i].tripID;
        if (countByTrip[id]) {
            countByTrip[id]++;
        } else {
            countByTrip[id] = 1;
        }
    }

    let bestTripId = null;
    let bestCount = 0;
    for (let id in countByTrip) {
        if (countByTrip[id] > bestCount) {
            bestCount = countByTrip[id];
            bestTripId = Number(id);
        }
    }

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === bestTripId) {
            console.log("Best-selling trip: ")
            console.log(trips[i].departure + " -> " + trips[i].destination)
            console.log(bestCount + " tickets sold")
        }
    }

}







