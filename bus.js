var Student = require('./student.js');

var Bus = function(driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
		this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
	}
	this.busChatter = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
		var Kid = new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase);
		if(Kid.detentions < 10 && Kid.GPA > 2){
			console.log(Kid.catchPhrase);
		}
	}
}

module.exports = Bus;