let date = new Date();
let year = date.getFullYear()

class Passenger{
    constructor(firstname, lastname, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, id){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.dateLeaving = dateLeaving;
        this.dateReturning = dateReturning;
        this.numberOfBags = numberOfBags;
        this.id = id;
    }
}

let passengerList = [];
let idCount = 1;

function addToList(){
    //getting all the info
    let firstname = document.getElementById("firstname").value; 
    let lastname = document.getElementById("lastname").value;
    let birthday = document.getElementById("birthday").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivalCity = document.getElementById("arrivalCity").value;
    let dateLeaving = document.getElementById("dateLeaving").value;
    let dateReturning = document.getElementById("dateReturning").value;
    let numberOfBags = document.getElementById("numberOfBags").value;


    //calculating all the extra information

        //age & if they can drink
            birthdayNumbers = birthday.split("-")
            console.log(birthdayNumbers)
            let canDrink = false;
            let age = year - birthdayNumbers[0];
            if(age >= 21){
                canDrink = true;
            }
        //Extra Costs
            let extraCost = 0;
            extraCost += numberOfBags * 20;

        //How long they'll be leaving for
            leavingNumbers = dateLeaving.split("-")
            returningNumbers = dateReturning.split("-")

            let daysGone = returningNumbers[2] - leavingNumbers[2];
            console.log(daysGone);
    //Checking if all the info is there before it goes into the list.
    if(firstname != "" && lastname != "" && birthday != "" && departureCity != "" && arrivalCity != "" && dateLeaving != "" && dateReturning != ""){
        let passenger = new Passenger(firstname, lastname, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, idCount)
        idCount++;

        //Adds the passenger to the list and resets the inputs
        passengerList.push(passenger);
        console.log(passengerList[0])
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("departureCity").value = "";
        document.getElementById("arrivalCity").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateReturning").value = "";
        document.getElementById("numberOfBags").value = "";
    }
}

function print(){
    let space = document.getElementById("printSpace");
    space.innerHTML = "";
    for(let i = 0; i < passengerList.length; i++){
        space.innerHTML += `<div><span>${passengerList[i].firstname} ${passengerList[i].lastname}</span><br><br>ID: ${passengerList[i].id}<br>Birthday: ${passengerList[i].birthday}<br>Departure City: ${passengerList[i].departureCity}<br>Arrival City: ${passengerList[i].arrivalCity}<br>Date Leaving: ${passengerList[i].dateLeaving}<br>Date Returning: ${passengerList[i].dateReturning}<br>Number of Bags: ${passengerList[i].numberOfBags}</div>`
    }
}