let date = new Date();
let year = date.getFullYear()

class Passenger{
    constructor(firstname, lastname, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, id, meal, duration, age, extras, cost){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.dateLeaving = dateLeaving;
        this.dateReturning = dateReturning;
        this.numberOfBags = numberOfBags;
        this.id = id;
        this.meal = meal;
        this.duration = duration
        this.age = age;
        this.extras = extras;
        this.cost = cost;
    }

}

let passengerList = [];
let idCount = 0;

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

        let radioButtons = document.getElementsByName('meal');

        for (let i = 0, length = radioButtons.length; i < length; i++){
            if (radioButtons[i].checked){
                var meal = radioButtons[i].value
                break;
            }
        }

        let inputElements = document.getElementsByName('extra');
        let extraList = ""
        let extraCount = 0;

        for(var i = 0 ; inputElements[i] ; i++){
            if(inputElements[i].checked){
                extraList += inputElements[i].value + " ";
                extraCount++;
            }
        }
        console.log(extraList)
        //age & if they can drink

            let DoB = new Date(birthday);

            let age = Date.now() - DoB.getTime();
            age = Math.abs(Math.floor(age / (1000 * 60 * 60 * 24 * 365.25)));

        //Extra Costs
            let totalCost = 300;
            let extraCost = 0;
            extraCost += numberOfBags * 20;
            extraCost += extraCount * 10;
            totalCost += extraCost;

        //How long they'll be leaving for
            let leaveDate = new Date(dateLeaving);
            let returnDate = new Date(dateReturning)

            let duration = returnDate - leaveDate
            duration = Math.abs(Math.floor(duration / (1000 * 60 * 60 * 24))) 
    //Checking if all the info is there before it goes into the list.
    if(firstname != "" && lastname != "" && birthday != "" && departureCity != "" && arrivalCity != "" && dateLeaving != "" && dateReturning != ""){
        let passenger = new Passenger(firstname, lastname, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, idCount, meal, duration, age, extraList, totalCost)
        idCount++;
        //Adds the passenger to the list and resets the inputs
        passengerList.push(passenger);
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("departureCity").value = "";
        document.getElementById("arrivalCity").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateReturning").value = "";
        document.getElementById("numberOfBags").value = "";
        document.getElementsByName("meal").checked = false;
    }
}

function print(){
    let space = document.getElementById("printSpace");
    names.innerHTML = "";
    for(let i = 0; i < passengerList.length; i++){
        names.innerHTML += `<div><span>${passengerList[i].firstname} ${passengerList[i].lastname}</span>ID: ${passengerList[i].id}`
    }
}

function search(){
    let searchedId = document.getElementById("search").value
    console.log(passengerList[searchedId]);
    document.getElementById("outfirstName").value = passengerList[searchedId].firstname
    document.getElementById("outlastName").value = passengerList[searchedId].lastname
    document.getElementById("outDoB").value = passengerList[searchedId].birthday
    document.getElementById("outBags").value = passengerList[searchedId].numberOfBags
    document.getElementById("outDeparting").value = passengerList[searchedId].departureCity
    document.getElementById("outArriving").value = passengerList[searchedId].arrivalCity
    document.getElementById("outLeaveDate").value = passengerList[searchedId].dateLeaving
    document.getElementById("outReturnDate").value = passengerList[searchedId].dateReturning
    document.getElementById("outDuration").textContent = passengerList[searchedId].duration + " Days"
    document.getElementById("outMeal").value = passengerList[searchedId].meal
    document.getElementById("outage").textContent = passengerList[searchedId].age
    document.getElementById("outExtras").value = passengerList[searchedId].extras
    document.getElementById("outcost").textContent = "$" + passengerList[searchedId].cost
    // document.getElementById("outExtras").value = passengerList[searchedId].
}
