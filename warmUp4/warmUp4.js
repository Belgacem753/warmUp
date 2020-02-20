// 1-Define a function called myTrueFun that returns true whenever its called.

<<<<<<< HEAD
function myTrueFun() {
	return true;
	
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

	function typeFunc(value){
		if( typeof value==="string"){
			return true;
		}
		return false;

	}
	return false;

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function prime(number){
	var arr=[];
	for(var i=1;i<number+1;i++){
		if(number%i===0){
			arr.push(i);
			}
	}
	if (arr.length===2){
		return "The number is prime";
	} 
	return "The number is not prime";
}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function same(a,b){
	if(a===b){
		return true;
	}
	return false;
}
=======
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
