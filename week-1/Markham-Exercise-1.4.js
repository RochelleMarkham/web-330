/*
============================================
; Title: Exercise 1.4
; Author: Professor Krasso
; Date: April 29 2020
; Modified By: Rochelle Markham
; Description: Duck Typing/Interfaces
;===========================================
*/

//links the header program to the current program
var header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 1.4") + "\n");

//start program

//params: string
//output: outputs the input model
//description: car class constructor
function Car (model){
  this.model = model;
}

//prototype for adding car to the the racetrack
Car.prototype.start = function (){
  console.log("Car added to the racetrack!");
}

//params: string, number
//output: outputs the input model and year
//description: truck class constructor
function Truck (model, year){
  this.model = model;
  this.year = year;
}

//prototype for adding truck to the racetrack
Truck.prototype.start = function (){
  console.log("Truck added to the racetrack!");
}

//params: string, number, string
//output: outputs the input model, year and color
//description: jeep class constructor
function Jeep (model, year, color){
  this.model = model;
  this.year = year;
  this.color = color;
}

//prototype for adding jeep to the racetrack
Jeep.prototype.start = function (){
  console.log("Jeep added to the racetrack!");
}

//Array to hold all three classes: car, truck & jeep
let racetrack = [];

//params: string vehicle type
//output: string
//description: prints the type of vehicle added to the racetrack
//and pushes the vehicle to the racetrack array
function driveIt (vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

//new vehicle object declarations
let mustang = new Car ("Mustang");
let tundra = new Truck ("Tundra", 2018);
let wrangler = new Jeep ("Wrangler", 2019, "Teal");

//passes the previously defined objects to the driveIt function
driveIt(mustang);
driveIt(tundra);
driveIt(wrangler);

//display racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");

// Loop over the array and output the results.
for (let x = 0; x < racetrack.length; x++) {
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

//end program