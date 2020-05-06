/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: May 5 2020
; Modified By: Rochelle Markham
; Description: Prototypes
;===========================================
*/

//links the header program to the current program
var header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 2.2") + "\n");

//start program

//sets person to a function that returns the age 
var person = {
    getAge: function(){
        return this.age;
    }
}

//creats a new person object with a specific name and age
var human = Object.create(person, {
    "age":
        {"value": "34"},
    "fullname": 
        {"value": "Rochelle Markham"},
})

//prints the full name property of the newly created object
console.log("The person's full name is " + human.fullname + ".");
//prints calls the getAge function to print the age property
//of the newly created object
console.log("The person's age is " + human.getAge() + ".");

// end program
