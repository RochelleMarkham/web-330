/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date: 26 February 2020
; Modified By: Rochelle Markham
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
};

//To insert in other programs/test
//const header = require('./Markham-header.js');

//console.log(header.display("Rochelle", "Markham", "Assignment 2.2"));
