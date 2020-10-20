//****Climbing Log****
let myClimbingLog= [];

function Climb() {
	this.name = name;
	this.grade = grade;
	this.area = area;
	this.wall = wall;
	this.gpsLoc = gpsLoc;
	this.date = date;
	this.attempts = attempts;
	this.sent = sent;
	this.type = type;
	this.comments = comments;
}


//****Functions****
function addElementToArray(array, element) {
	array.push(element);	
}

function printElementsInArray(array){
	for (const index in array){
		console.log(array[index]);
	}
}

addElementToArray(myClimbingLog, 'foo');
addElementToArray(myClimbingLog, 'poo');
addElementToArray(myClimbingLog, 'roo');
printElementsInArray(myClimbingLog);
