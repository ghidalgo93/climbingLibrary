// Climbing Library Application
// Author: Gerardo Hidalgo-Cuellar, github.com/ghidalgo93/climbingLibrary
// Date: 10/21/20


//****Variable Definitions****
let climbLibrary = [];


//****Object Definitions****
function Climb(name, grade, location, date, type, sent) {
	this.name = name;
	this.grade = grade;
	this.location = location;
	this.date = date;
	this.type = type;
	this.sent = sent;
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
function displayClimbs(table, library){
	//clear current table
	//removeAllChildNodes(table);
	//loop through the library
	for (const index in library){
		//create an empty row element and add it to the last position of the table
		let row = table.insertRow(0);
		//insert cells into new row element
		//add content to those cells
	}
}

function generateTableHead(table, data){
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (let key of data){
		let th = document.createElement('th');
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	} 
}

function generateTable(table, data) {
	for (let element of data) {
		let row = table.insertRow();
		for (key in element) {
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}

//****DOM Definitions****
let climbTable = document.querySelector('#climbTable');


//****Script****
const c1 = new Climb('american beauty', '5.12b', 'sport park', 'boulder canyon', '10/21/2020', 'sport', true);
const c2 = new Climb('ten digit diling', '5.12d', 'wall of the 90s', 'clear creek', '10/20/2020', 'sport', false);

addClimbToLibrary(climbLibrary, c1);
addClimbToLibrary(climbLibrary, c2);

let data = Object.keys(climbLibrary[0]);
generateTable(climbTable, climbLibrary);
generateTableHead(climbTable, data);

