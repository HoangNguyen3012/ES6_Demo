/////////////////////// ES6 Demo
/** Variable registration
 * with var, let and const
 * hoisting mechanism
 * when to use
 */

// Var
// console.log(fullName); -> has hoisting
var fullName = 'Blabla';
// console.log(fullName);
// console.log(window);
// console.log(window.fullName); -> store in window object

function showErrorWithVar () {
    var isError = true;
    var error = '';
    //For var, hoisting works and it has function scope; meaning it is 1 variable inside a function regardless of operation, but different variables for different functions    
    if(isError) { 
        var error = 'Something went wrong';
        console.log(error); // 'Something went wrong'
    };
    console.log(error); // 'Something went wrong'
}; // Only use when browser doesnt support let or const (IE)

// Let
// console.log(age); // not initialized -> no hoisting
let age = 16;
// console.log(age);
// console.log(window.age); -> not store in window Object
// let age = 20; // identifier has been declared

function showErrorWithLet () {
    let isError = true;
    let error = '';
    //For let, hoisting doesnt work and it has block scope; meaning it cannot get value out of operation
    if(isError) {
        let error = 'Something went wrong';
        console.log(error); // 'Something went wrong'
    };
    console.log(error); // ''
}; // Use when re-assigning a value to a variable


// Const
// console.log(birth); // no hoisting, must assign value when initializing 
const birth = 1996;
// console.log(birth);
// console.log(window.birth); -> not store in window Object
// const birth = 2000; -> cannot re-assign value

function showErrorWithConst () {
    const isError = true;
    const error = '';
    //For const, hoisting doesnt work and it has block scope; 
    if(isError) {
        const error = 'Something went wrong';
        console.log(error); // 'Something went wrong'
    };
    console.log(error); // ''
}; // Use when not re-assigning value to a variable



/** Function
 * Declaration vs Expression (normal function) vs Arrow function
 * Syntax, this
 */

//Expression function
const getAgeNormal = function(birth) {
    return 2021 - birth;
};

//Arrow function
/** Undefined execution, meaning there is no this
 * this of arrow function = this of outter function
 * without outter function, this of arrow function = global object */ 

const getAgeArrow = (birth) => {
    return 2021 - birth;
};
// getAgeArrow(2000); -> 21
const getAgeArrowShort = (birth) => 2021 - birth;
const getAgeOnePara = birth => 2021 - birth;

/** Do not use arrow function for constructor function or object's method 
const student = () => {
    //
};

// var manpw = new student(); -> student is not a constructor */
const student = {
    name: 'blabla', //comma
    birth: 2000,
    getAgeStudentNorm: function() {
        console.log(2021 - this.birth);
        const _this = this; // to transfer object this into inner function
        const checkAgeNorm = function() {
            if(2021 - this.birth > 18){ // this is now window, use _this instead
                console.log('18+');
            }else{
                console.log('not 18+');
            }
            
        }.bind(student); // to make this the object student

        const checkAgeArrow = () => { // Using arrow function inside another function is recommended
            if(2021 - this.birth > 18){
                console.log('18+');
            }else{
                console.log('not 18+');
            }
            
        };
    }, // comma

    // Do not use arrow function for object's method
    getAgeStudentArrow: () => {
        console.log(2021 - this.birth); // this here is global object (window)
    }
};
//student.getAgeStudentNorm();
//student.getAgeStudentArrow(); -> NaN



/** Default Parameter
 * 
 */

const withoutDefaultPara = (userType) => {
    if(userType === 'user'){
        console.log('Redirect to user page');
    } else{
        console.log("Direct to admin page");
    }
};
// withoutDefaultPara('user');

const withDefaultPara = (userType = 'user') => { // assign default para to assume most case a default case
    if(userType === 'user'){
        console.log('Redirect to user page');
    } else{
        console.log("Direct to admin page");
    }
}
// withDefaultPara(); // Default case
// withDefaultPara('admin'); // Changed case



/** Destructuring
 * Destructure Array
 * Destructure Object
 * 
 */

// Array
// Without destructuring
const students = ['A', 'B', 'C'];
// const firstStudent = students[0];
// console.log(firstStudent);

// With destructuring
const [firstStudent, secondStudent, thirdStudent] = students; // assign variables to values inside array
// console.log(firstStudent);

// Object
// Without destructuring
const studentObj = {
    objName: 'Blabla', //comma
    age: 16, //comma
};
// const fullName = studentObj.objName;
// const age = studentObj['age'];
// console.log(fullName, age);

// With destructuring
const {objName, age: ageValue} = studentObj; // Get the right key to set variables to value, use : to change key name like age to ageValue
console.log(objName,ageValue);

/** String template */

const randomName = 'A Guy';
const str = 'My name is' + randomName;
const templateStr = `My Name is ${randomName}`;

/** Enhanced object literals (Shorthand syntax) */
const personAge = 18;
var person = {
    personName: 'Not Important', //comma
    personAge, // personAge: personAge

    getAge: function() {
        return 2021 - this.age;
    }
}