console.log(external)
const name='tom'
var age =18
var email= 'test@email.com'

console.log(name)
console.log(age)
console.log(email)

// name='sam'
age=17
email='text'

console.log(name)
console.log(age)
console.log(email)

var a=3
var b='3'
 
console.log(a+b)
console.log(a+a)
console.log(b+b)

var h;

let d='50'
let e=32
let f=false
let g=null
// let h=v
let i=Symbol("+")

console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))
console.log(typeof(i))


e=e.toString()
d=parseInt(d)
d++

console.log('variable d is now '+name)
console.log(d)
console.log(typeof(e))

let z='34'
let y='40'
console.log(z+y)
console.log(z/y)
console.log(z*y)
console.log(z-y)

let favorite='7'
let word='my favorite number is '
console.log(word+favorite)

let arithmetic='2'+'2'
let arithmetic1='2'-'2'
let arithmetic2='2'/'2'
let arithmetic3='2'*'2'

console.log(arithmetic)
console.log(arithmetic1)
console.log(arithmetic2)
console.log(arithmetic3)

arithmetic =2
arithmetic1 = parseInt(arithmetic)
console.log(arithmetic)
console.log(typeof(arithmetic1))
console.log(typeof(arithmetic.toString()))

var dy = 20

dy +=5 //dy modulos%=5 will be 0
console.log('dy is '+dy)
var u_age =19
if (u_age > 18){
    console.log('can drink beer')
}

var height=5
if (height>6 || u_age >= 19){
    console.log('can join police force')
}

var bal=30
var withdraw=10
if(bal>=withdraw){
    bal-=withdraw;
    console.log('withdrawal successful')
}else{
    console.log('insufficient funds')
}
console.log(bal)

var age=25
if(age<10){
    console.log('child')
}else if(age<20){
    console.log('teen')
}else if(age<30){
    console.log('twenties')
}else {
    console.log('you are 30+')
}
//switch statement
var age=30
switch(true){
    case(age<10):
    console.log('child')
    break
    case(age<20):
    console.log('teen')
    break
    case(age<30):
    console.log('twenties')
    break
    default:
        console.log('you are 30')
}

const expr = 'pinapple';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    break
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
for(wallet=0; wallet<999; wallet++){
    console.log('my balance is now'+wallet)
}

const names=['john','Akin','Paul','Joe']

names.forEach((item)=>console.log(item))

var x = 15;
var dy = 10;
do {
    console.log(x)
    x--
} while(x>0)

while(dy > 0){
    console.log(dy)
    dy--
}

// /1.	Create two variables, a and b, and assign them values of your choice (they can be numbers or strings).
// 	2.	Write expressions using the following comparison operators and log the results to the console:
// 	•	== (loose equality)
// 	•	=== (strict equality)
// 	•	!= (loose inequality)
// 	•	!== (strict inequality)
// 	•	>
// 	•	<
// 	•	>=
// 	•	<=

// Example:

// let a = 5;
// let b = '5';
// // Perform comparisons here

// Part 2: Practice Problems

// 	1.	Write a program that takes two numbers as input and checks:
// 	•	If the first number is greater than the second.
// 	•	If the two numbers are equal in value and type.
// 	•	If the first number is less than or equal to the second.
// 	2.	Write a program that checks if a given number is even or odd using the modulus operator (%). If the number is even, log “Even” to the console; otherwise, log “Odd.”

// Bonus (Optional):

// 	•	Use both == and === to compare a number and a string (e.g., 5 == '5' vs. 5 === '5'). Log the results and explain the difference between the two operators.

// Submission Guidelines:

// 	•	Submit the JavaScript file with the answers.
// 	•	Ensure your code runs without errors and logs the correct results in the browser console.

// This assignment reinforces their understanding of arithmetic and comparison operators with hands-on practice.

var a='linda'
var b='hi ' 
console.log(b + a)

var a=5
var b='5'
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

var balance=100
var withdraw=50
if (balance>withdraw){
    bal-=withdraw;
    console.log('balance is greater than withdraw')
}else{
    console.log('balance is insufficient')
}
if(balance===withdraw){
    balance-=withdraw;
    console.log('balance is not strickly equal to withdraw')
}else{
    console.log('balance not strictly equal to withdraw')
}
if(balance<=withdraw){
    console.log('balance less than or equal to withdraw')
}else{
    console.log('balance is greater than or equal the withdraw')
}

var data=parseInt(prompt('enter a number'));
console.log(data%2===0?'even':'odd');

var data=100
if(5%100){
    console.log('even')
}else if(5%20){
    console.log('odd')
}

var data=75
if(5%75){
    console.log('odd')
}else if(5%25){
    console.log('even')
}