// Climbing Library Application
// Author: Gerardo Hidalgo-Cuellar, github.com/ghidalgo93/climbingLibrary
// Date: 10/21/20

//****Variable and Object Definitions****
let climbingLibrary= [];

function Climb(name, grade, location, date, sent, type) {
	this.name = name;
	this.grade = grade;
	this.location = location;
	this.date = date;
	this.sent = sent;
	this.type = type;
}


//****Functions****
function addClimbToLibrary(library, climb) {
	library.push(climb);	
}

function printClimbingLib(library){
	console.table(library);
}

//****Script****
const c1 = new Climb('american beauty', '5.12b', 'sport park', 'boulder canyon', '10/21/2020', true, 'sport');
const c2 = new Climb('ten digit diling', '5.12d', 'wall of the 90s', 'clear creek', '10/20/2020', false, 'sport');


addClimbToLibrary(climbingLibrary, c1);
addClimbToLibrary(climbingLibrary, c2);

printClimbingLib(climbingLibrary);
