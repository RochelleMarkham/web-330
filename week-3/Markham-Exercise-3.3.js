/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: May 13 2020
; Modified By: Rochelle Markham
; Description: The Singleton Pattern
;===========================================
*/

//links the header program to the current program
var header = require('../Markham-header.js');

//arguments for the header program
console.log(header.display("Rochelle", "Markham", "Exercise 3.3") + "\n");

// start program


var DatabaseSingleton = (function() {
  var instance;
//creates and returns a new database Object
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    //if an object is not already an instance, create one and
    //return that instance
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

//compares 2 instances of a constructed database for equality
//and returns a string + boolean stating the results
function databaseSingleTest() {
  //sets the first created instance to a variable
  var databaseInstance1 = DatabaseSingleton.getInstance();
  //sets the second created instance to a variable
  var databaseInstance2 = DatabaseSingleton.getInstance();
  //prints a string + boolean to output the results of the comparison
  //of the two databases
  console.log(
    "Same database instance? " + (databaseInstance1 === databaseInstance2)
  );
}

//calls the previously defined comparison function
databaseSingleTest();

// end program