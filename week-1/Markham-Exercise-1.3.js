/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: April 28 2020
; Modified By: Rochelle Markham
; Description: Class Refresher
;===========================================
*/

//links the header program to the current program
var header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 1.3") + "\n");

//params: 3 strings and 1 numerical value
//output: N/A
//description: sets input values to properties
function cellPhone(manufacturer, model, color, price){
    this.manufacturer=manufacturer;
    this.model=model;
    this.color=color;
    this.price=price;

    //params:N/A
    //output:number
    //description: returns the price of the phone from the previous input
    this.getPrice = function() {
        return this.price;
    }

    //params: N/A
    //output: string
    //description: returns the model of the phone from the previous input
    this.getModel = function() {
        return this.model;
    }

    //params: N/A
    //output: string
    //description: returns the property values from the original input
    //and calls the getModel & getPrice functions to return the property
    //values described in those functions
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
        "\nColor: " + this.color + "\nPrice: $" + this.getPrice();
    }}

    //sets a new cellPhone object with 4 arguments
    var myPhone = new cellPhone("Samsung", "Galaxy S10", "Black", 500);
    
    //output
    console.log("-- DISPLAYING CELL PHONE DETAILS--");

    //outputs the results of the getDetails functions > all details
    //of the myPhone object
    console.log(myPhone.getDetails());
