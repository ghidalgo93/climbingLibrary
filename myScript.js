// Climbing Library Application
// Author: Gerardo Hidalgo-Cuellar, github.com/ghidalgo93/climbingLibrary
// Date: 10/21/20


//****Variable Definitions****
let climbLib= [];



//****Object Definitions****
function Climb(name, grade, location, date, type, sent) {
	this.name = name;
	this.grade = grade;
	this.location = location;
	this.date = date;
	this.type = type;
	this.sent = sent;
}

// Climb.prototype.toggleSend = function() {
// 	this.send = !this.send; 
// }


//****Functions****

function addClimb(e){
	//prevents the form submit to reload page
	e.preventDefault();
	let properties = ['name', 'grade', 'location', 'date', 'type', 'sent'];
	const climb = new Climb(); 
	let form = e.target;
	let formInputs = form.elements;
	// add ONLY the properties in a climb object
	for (let element in formInputs){
		let prop = formInputs[element].name;
		let value = formInputs[element].value;
		if (properties.includes(prop)){
			climb[prop]= value;
		}
	}

	console.log(climb);


	//addClimbToLibrary
	climbLib = addClimbToLibrary(climbLib, climb);
	//re renderTable
	renderTable(climbTbl, climbLib);
}

// function added to every remove button as its made
// input: [num] index of climb to be removed
function removeClimb(index){
	climbLib = removeClimbFromLibrary(climbLib, index);
	//re renderTable(table, library)
	renderTable(climbTbl, climbLib);
}

// Adds climb object to a copy of the given library
// input: [arr] climb library, [obj] climb 
// return: [arr] copy of library
function addClimbToLibrary(library, climb) {
	return library.concat(climb);
}

// removes a climb object from a copy of given library
// input: [array] library, [num] index of climb to remove
// return: a new library array with the climb removed
function removeClimbFromLibrary(library, climbIndex) {
	let newLib = [...library];
	newLib.splice(climbIndex, 1);
	return newLib;
}

// Renders a DOM table element with the given data
// input: DOM table, [arr of objects] data 
function renderTable(table, data){
	//clear current table
	removeAllChildNodes(table);
	generateTable(table, data);	
	let headerRow = Object.keys(data[0]);
	generateTableHead(table, headerRow)
	//add event listeners to remove buttons
	let removeBtns = document.querySelectorAll('button');
	//passs in row index to removeClimb (row = button->cell->row)
	removeBtns.forEach(btn => btn.addEventListener('click', () => {removeClimb(btn.parentNode.parentNode.dataset.index)}));
}

// Generates a table head for a given DOM table
// input: [DOM table] table, [array of strings] row headings 
// return: the table head
function generateTableHead(table, headings){
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (let key of headings){
		let th = document.createElement('th');
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	} 
	return thead;
}

// Generates a table for a given DOM table
// input: [DOM table] table, [array of object] data
// return: the table head
function generateTable(table, data) {
	let index = 0;
	for (let element of data) {
		let row = table.insertRow();
		row.dataset.index = index;
		for (key in element) {
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
		let remove = row.insertCell();
		let removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove';
		remove.appendChild(removeBtn);
		index++;
	}
}


// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent){
	while (parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}

//****DOM Definitions****
let climbTbl = document.querySelector('#climbTbl');
const form = document.querySelector('#climbForm');
form.addEventListener('submit', addClimb);


//****Script****



