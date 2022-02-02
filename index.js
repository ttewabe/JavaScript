//JavaScript Operators
// Arthimatic operator: + - * / % ** etc
// Comparision Operator: > < => =< == ===
// Logical Operator: | || &&

let numone =3;
let numtwo =4;
let remainder= numtwo % numone;
let exponentation = numone ** numtwo; // 3*3*3*
let diff = numtwo - numone;
let prod = numone * numtwo;
let div = numtwo / numone

console.log(remainder)
console.log(exponentation)
console.log(diff)
console.log(prod)
console.log(div)
// string concatination and string interpolation
let firstName= 'Tewabe';
let lastName ='Tadege';
let space=' '
let country= 'Etiopia';
let job = 'teacher';
let age= 35;

let fullName=firstName    + space +    lastName;
console.log(fullName)
// let personalinfo = 'My name is' + fullname + '.' + 'I am from' + country + '.' + 'I am' + age + 'years old.' + 'I am a' + job + '.'
// console.log(personalinfo)
// My name is Tewabe Tadege. I am from Etiopia.I am 35years old. I am ateacher.

let personalInfo=`My name is ${fullName}. I am from ${country}. I am ${age} years old. I am a ${job}.`
console.log(personalInfo)

//Strings
let firstName='Tewabe';
console.log(firstName)
console.log(firstName.length)
console.log(firstName[0])
console.log(firstName[4])
console.log(firstName[5])
let lastIndex =firstName.length -1
console.log(firstName[lastIndex])
console.log(firstName.split());
console.log(firstName.split(''));
console.log(firstName.split(' '));
console.log(firstName.toUpperCase());
console.log(firstName.substring(0, 4))
console.log(firstName.replace('Tewabe','microsoft'))


// Arrays :- help to store different data types in one
let numbers = [1, 2, 3, 4, 5, 6, 7 , 8 ,9, 10]
console.log(numbers.length)
let len = numbers.length
console.log(numbers[0])
let lastIndex =len-1
console.log(numbers[lastIndex])
numbers[0]=10
console.log(numbers)
numbers[3]=40
console.log(numbers)


// conditionals
let numOne=4;
if (numOne > 5){
    console.log('the number is greater than 5')
}
else {
    console.log('the number is lesst than 5')
}


let num=prompt('enter Number:');
if(num>0){
    console.log(num,'is positive')
}
else if(num == 0){
    console.log(num,'is zero')
}
else if(num < 0){
    console.log(num,'is negative')
}
else{
    console.log(num, 'not a number')
}


// switch, if else if else if else alternative
//let day = prompt('what is the day today?')
// let day = prompt('what is the day today?')
// if (day =='Monday'){
//     console.log('Today is Monday');
// }
// else if (day =='Tuesday'){
//     console.log('Today is Tuesday');
// }
// else if (day =='Wednesday'){
//     console.log('Today is Wednesday');
// }
// else if (day =='Thursday'){
//     console.log('Today is Thursday');
// }
// else if (day =='Friday'){
//     console.log('Today is Friday');
// }
// else if (day =='Saturday'){
//     console.log('Today is Saturday');
// }
// else if (day =='Sunday'){
//     console.log('Today is Sunday');
// }
// else {
//     console.log('The given day is unknown day')
// }

let day = prompt('what is the day today?');

switch (day){
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log('Today is Sunday');
        break;
    default:
        console.log('The day is Unknown');
}

// Conditional Ternary Operator 
//sckeleton  :- condition ? Statement is going true : the part which is not 

let num=4;
num> 5
  ?  console.log('the number is greater than 5')
  : console.log('the number is less than 5')

  false ? console.log('Do the one which is true')
  :console.log('Then do for the other')



//loop
// for loop,while do loop, for of
//for(i=0; conditional increment){           }


//for loop
for (i=0;i<6; i++){
    console.log(i)
}
//while loop
let i=0; 
while (i<6) {
    console.log(i);i++
}

//Do while loop

let i=0; 
 do {
    console.log(i);i++
} while (i<6)

//for of loop
// example 1
const nums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 for(const num of nums){
     console.log(num)
 }
 // example 2
 const countries =['ethiopia', 'sudan', 'kenya']
 for(const country of countries) {
    console.log(country.toUpperCase())
}


//Function
//Example 1
function nameofFunction(){
    console.log('Tewabe')
}
nameofFunction()

// to generate more
function generateFullName(){
    let firstName='Tewabe'
    let lastName='Tadege'
    let space=' '
    let fullName= firstName + space + lastName 
    console.log(fullName)
}
generateFullName()

// To make dynamic & short we use this fun
function generateFullName(firstName, lastName){
    let space=' '
    let fullName= firstName + space + lastName 
    console.log(fullName)
}
generateFullName('Tewabe', 'Tadege')
generateFullName('Noah', 'Amsalu')
generateFullName('Haymi', 'Terefe')


// Arrow help short 

const generateFullName=(firstName, lastName) => {
    let space=' '
    let fullName= firstName + ' ' + lastName;
    return fullName;
    }
    console.log(generateFullName('Tewabe', 'Tadege'))
    console.log(generateFullName('Noah', 'Amsalu'))
    console.log(generateFullName('Haymi', 'Terefe'))
    
 // more short way
    const generateFullName=(firstName, lastName) => firstName + '' + lastName;
    console.log(generateFullName('Tewabe', 'Tadege'))
    console.log(generateFullName('Noah', 'Amsalu'))
    console.log(generateFullName('Haymi', 'Terefe'))


//Function declaration, expresion, array function 
// Declaration
function addTwoNumbers(numOne,numTwo){
    let sum =numOne + numTwo
    return sum;
}
console.log(addTwoNumbers(2,1))
console.log(addTwoNumbers(99,1))

// Expresion
const addTwoNumbers= function(numOne,numTwo) {
    let sum =numOne + numTwo
    return sum;
}
console.log(addTwoNumbers(2,1))
console.log(addTwoNumbers(99,1))

//Arrow
const addTwoNumbers=(numOne,numTwo)=> numOne + numTwo
   
console.log(addTwoNumbers(2,1))
console.log(addTwoNumbers(99,1))
// Ex2 Default function 
const squar =(n) =>n*n
console.log(squar(3))

const weight=(mass,gravity)=>mass * gravity
console.log(weight(100,9.81))

// For unlimited Number. we can you use Arguments
function addNumbers() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
    console.log(arguments[i])
    }
}
addNumbers(100, 2, 3, 500)

// ex 2
function addNumbers() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
    sum=sum + arguments[i];
    }
    return sum;
}
console.log(addNumbers(100, 2, 3, 500))

// ex 2 by Arrow
const addA11Nums = (...args) => {
    let sum = 0;
    for (const num of args) {
    sum += num;
    }
    return sum;
}
console.log(addA11Nums(100, 2, 3,500))


// Objects literal
const dog ={
    name:'pupy',
    age:4,
    legs: 4,
    cplor:'black'
   }
   console.log(dog)
   console.log(dog.name)
   console.log(dog['name'])
   console.log(dog.age)
   console.log(dog['age'])

// Personal info by objective 
   const person ={
    firstName: 'Tewabe',
    lastName: 'Tadege',
    age: 250,
    job: 'engineer',
    address: {
        country:'Ethiopia',
        city: 'Addis Ababa',
        postbox: '121222',
    },
   skill: ['HTML', 'css','javascript'],
   getpersonalinfo:function(){
       let personalinfo = `I am ${this.firstName} ${this.lastName}. I am  ${this.age} years old. I am an ${this.job}. I teach ${this.skill}.`;
       return personalinfo
   }
   }
   console.log(person.getpersonalinfo())


    