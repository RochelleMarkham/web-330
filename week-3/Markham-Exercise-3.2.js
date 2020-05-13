/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: May 13 2020
; Modified By: Rochelle Markham
; Description: The Factory Pattern
;===========================================
*/

//links the header program to the current program
var header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 3.2") + "\n");

// start program

//sets properties for Oracle and how they should be displayed
function Oracle(properties) {
  this.username = properties.username || "<username>";
  this.password = properties.password || "<password>";
  this.server = properties.server || "3000";
  this.version = properties.version || "2.0.0";
}

//sets properties for Informix and how they should be displayed
function Informix(properties) {
  this.username = properties.username || "<username>";
  this.password = properties.password || "<password>";
  this.server = properties.server || "8080";
}

//creates DatabaseFactory function with no parameters or arguments
function DatabaseFactory() {}

//sets the databaseClass property as the prototype of DatabaseFactory
//this value is set as the Oracle function
DatabaseFactory.prototype.databaseClass = Oracle;
//adds createDatabase to the prototype of DatabaseFactory
//value is set to a function stating that if the properties of a database
//match the properties of one of the defined databases, then the Class is
//that of the matching database; if not it is the class of the other database
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }
  //returns a new databaseClass object
  return new this.databaseClass(properties);
};

//sets up a new instance of informix and adds properties
//to the database
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "Develop2345",
  password: "code247"
});

//sets up a new instance of oracle and adds properties
//to the database
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "Coder1234",
  password: "superstar!"
});

//prints the details of the oracle database
console.log(oracle);

//prints the details of the informix database
console.log(informix);
// end program
