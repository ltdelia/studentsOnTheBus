var Student = require('./student.js');
var Bus = require('./bus.js');
var prompt = require('prompt');
var fs = require('fs');

// make the bus object with the constructor function
var School = new Bus();

// add 20 students to it

prompt.start();

// schema variable for validation -- all the student information we will prompt the user for
var schema = {
	properties:{
		name:{
			message: "Please input a name.",
			required: true
		},
		gender:{
			message: "Please input a gender.",
			required: true
		},
		grade:{
			message: "Please input a grade.",
			required: true
		},
		GPA:{
			message: "Please input a GPA.",
			required: true
		},
		detentions:{
			message: "Please input the number of detentions you have.",
			required: true
		},
		sleepingInClass:{
			message: "Please input if you are sleeping in class.",
			required: true
		},
		catchPhrase:{
			message: "Please input a catchphrase.",
			required: true
		}

	}
}

//npm prompt will prompt the user for all the properties/keys listed inside the schema object
prompt.get(schema, function(err, result){
	// log to console all results
	console.log("Name: " + result.name);
	console.log("Gender: " + result.gender);
	console.log("Grade: " + result.grade);
	console.log("GPA: " + result.GPA);
	console.log("Detentions: " + result.detentions);
	console.log("Sleeping in Class: " + result.sleepingInClass);
	console.log("Catch Phrase: " + result.catchPhrase);

	// creating a new student object with the student's information
	var inputStudent = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);

	// invoking the canStudentHaveFun function
	inputStudent.canStudentHaveFun();

	// invoking the studentEntersBus function
	School.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);

	// //call the busChatter property of the bus object
	for(var i=0; i<School.studentsOnTheBus.length; i++){
		School.studentsOnTheBus[i] = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
		School.busChatter();
	}

	// // append the text
	fs.appendFile('students.txt', JSON.stringify(School.studentsOnTheBus), function(err, data){
		if(err)
			throw err;
		else{
			console.log("Student is on the bus!");
		}
	})

	// // read the text, log the output to the console
	fs.readFile("students.txt", "utf-8", function(err, readResult){
		if(err)
			throw err;
		else{		
				var studentsOnTheBus = readResult.split('\r\n');
				for(var i=0; i< studentsOnTheBus.length-1; i++){
					var studentsJSON = JSON.parse(studentsOnTheBus[i].replace(/[\[\]']+/g,''));
					if(result.name == studentsJSON.name){
						console.log(studentsJSON.catchPhrase);
					}
				}
		}
	})
})
