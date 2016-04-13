// Our Constructor Function -- creates a student object
var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function(){
		if(detentions < 10 && GPA > 2){
			console.log("Student can have fun!");
		}else{
			console.log("Student cannot have fun.");
		}
	}
}

module.exports = Student;