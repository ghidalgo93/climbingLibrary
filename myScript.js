// Climbing Library Application
// Author: Gerardo Hidalgo-Cuellar, github.com/ghidalgo93/climbingLibrary
// Date: 10/21/20

//****Object Definitions****
function Climb(name, grade, location, date, sent, type) {
	this.name = name;
	this.grade = grade;
	this.location = location;
	this.date = date;
	this.sent = sent;
	this.type = type;
}


//****Functions****

// Adds climb object to the given library
// input: [arr] climb library, [obj] climb 
// return: [arr] climb library
function addClimbToLibrary(library, climb) {
	library.push(climb);	
	return library;
}

// Updates a DOM table element with the given climbing library
// input: DOM table, climbingLibrary
function updateClimbLibrary(table, library){
	//clear current table
	removeAllChildNodes(table);
	//loop through the library
	//for each climb object --> create a new dom element 
	//add that element to table
}

function removeAllChildNodes(parent){
	while (parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}

//****Variable Definitions****
let climbLibrary = [];
const climbTable = document.querySelector('#climbTable');


//****Script****
const c1 = new Climb('american beauty', '5.12b', 'sport park', 'boulder canyon', '10/21/2020', true, 'sport');
const c2 = new Climb('ten digit diling', '5.12d', 'wall of the 90s', 'clear creek', '10/20/2020', false, 'sport');


addClimbToLibrary(climbLibrary, c1);
addClimbToLibrary(climbLibrary, c2);


