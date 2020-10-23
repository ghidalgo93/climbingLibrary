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


//****Functions****

function addClimb(event){
	//prevents the form submit to reload page
	event.preventDefault();
	let properties = ['name', 'grade', 'location', 'date', 'type', 'sent'];
	const climb = new Climb(); 
	let form = event.target;
	let formInputs = form.elements;

	for (let element in formInputs){
		let prop = formInputs[element].name;
		let value = formInputs[element].value;
		if (properties.includes(prop)){
			climb[prop]= value;
		}
	}
	//addClimbToLibrary
	addClimbToLibrary(climbLib, climb);
	//re renderTable
	renderTable(climbTbl, climbLib);
}

// TODO function added to every remove button as its made
function removeClimb(event){
	//takes in row index
	//removeClimbFromLibrary(library, climbIndex)
	//re renderTable(table, library)

}

// Adds climb object to the given library
// input: [arr] climb library, [obj] climb 
// return: [arr] climb library
function addClimbToLibrary(library, climb) {
	library.push(climb);	
	return library;
}

function removeClimbFromLibrary(library, climbIndex) {
	//new variable to store modified library to return
	//newLibrary with climb taken out
	//return the newLibrary
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
	//click event, removeClimb function (pass in row index) 
	removeBtns.forEach(btn => btn.addEventListener('click', removeClimb));


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



