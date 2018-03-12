/*var obj = {
	name: 'James',
	sname: 'Bond',
	age: 7,
	sayHello: function(){
		alert(this.name)
	},
}

console.log(obj)
obj.sayHello();*/
/*
function Person(name, sname, age){
	this.name = name;
	this.sname = sname;
	this.age = age;	
	this.sayHello = function(){
		alert(this.sname);
	}
}

Person.prototype.sayHello = function(){
	alert(this.name);
}
Person.prototype.human = true;
var Alex = new Person('Alex', 'Black', 8);
var Bob = new Person('Bob', 'Bob', 10)

console.log(Alex);
console.log(Bob.human);

Alex.sayHello();*/


/*
function Rectangle(w,h){
	this.width = w;
	this.height = h;
}

Rectangle.prototype.getArea = function(){
	return this.width*this.height
}
Rectangle.prototype.toString = function(){
	return 'This is rectangle';
}
Rectangle.prototype.valueOf = function(){
	return this.width*this.height
}

var square1 = new Rectangle(100,200);
var square2 = new Rectangle(200,100);
console.log(square1);
// alert(square1.getArea());
// alert(square1)
alert(square1 + square2)
document.write(square1)
console.log(square1 + square2);
console.log(square1 - square2);


*/
/*
function rectangle(w,h){

	this.width = w;
	this.height = h;

}


rectangle.prototype.getArea = function(){
		return this.width * this.height;
	};


rectangle.prototype.compareTo = function(otherObj){
	if (this.getArea() > otherObj.getArea()){
		return 1
	}else if(this.getArea() < otherObj.getArea()){
		return -1
	}else{
		return 0
	}
	
}

rectangle.prototype.toString = function(){
	return "rectangle w: " + this.width + "rectangle h : " + this.height;
}

rectangle.prototype.valueOf = function(){
	return this.getArea();
}

rectangle.prototype.equals = function(otherObj){
	if(this.width == otherObj.width && this.height == otherObj.height){
		return true
	}
	return false
}

var rect1 = new rectangle(100, 20);
var rect2 = new rectangle(1000, 20);*/


// var res = rect1.compareTo(rect2);
// document.write(res)




// > < >= <= == !=
//if -----

/*if(rect1 > rect2){
	document.write('rect1 > rect2<br>')
}

if(rect1 < rect2){
	document.write('rect1 < rect2<br>')
}
if(rect1 >= rect2){
	document.write('rect1 >= rect2<br>')
}

if(rect1 <= rect2){
	document.write('rect1 <= rect2<br>')
}
if(rect1.valueOf() == rect2.valueOf()){
	document.write('rect1 == rect2<br>')
}
if(rect1.valueOf() != rect2.valueOf()){
	document.write('rect1 != rect2<br>')
}
*/

//incapsulation


/*function myClass(){


	function getSum(){
		alert('private')
	}
	function sqr(){
			
	}

	this.calculate = function(){
		
	};
}

var obj = new myClass();
obj.publicMethod();
*/






//inheritance
/*

function human(name, smth){
	this.name = name;
	this.smth = smth;	
}

human.prototype.talk = function(){document.write('Hello my name is ' + this.name + '<br>')}

function student(name, speciality){
	this.name = name;
	this.speciality = speciality;
}

function worker(name, speciality){
	this.name = name;
	this.speciality = speciality;
}

var human = new human('name', 'smth');

student.prototype = human;
worker.prototype = human;

var Antony = new student('Antony', 'student');
var Edgar = new worker('Edgar', 'worker');


Antony.talk()
document.write(Antony.speciality + '<br>');


Edgar.talk()
document.write(Edgar.speciality + '<br>');

console.log(Edgar);

*/

//polimorphysm

// function human(name){
// 	this.name = name;
// 	this.talk = function(){document.write('Hello my name is ' + this.name + '<br>')}
// }


// function student(name){
// 	this.name = name;
// 	this.academy = 'BrainAcademy'
// }

// function worker(name){
// 	this.name = name;
// 	this.speciality = 'Front-end developer';
// 	this.talk = function(){document.write('I am ' + this.name + '<br>')}
// }

// var human = new human('name');

// student.prototype = human;
// worker.prototype = human;

// var Antony = new student('Antony');
// var Edgar = new worker('Edgar');


// Antony.talk()
// document.write(Antony.academy + '<br>');


// Edgar.talk()
// document.write(Edgar.speciality + '<br>');
