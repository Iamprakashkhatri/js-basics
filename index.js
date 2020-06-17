console.log('Hello world');
// let name='Monica';
// console.log(name);

let firstName="Rosh";
let lastName='Giller';

const interestRate=0.5;
// data types:primitives=string,no.,boolean,null,undefined
let name='monica';
let age=30;
let isapproved=false;
let Firstname=undefined;
let Lastname=null

// data types:dynamic type:
// try in console: name='hari', typeof name: name=1,typeof name
let name1='mess';
console.log(name);

// data types:reference type:object,array,function

// object:having multiple properties with key value pair
let person={
    name:'Mosh',
    age:30
};
console.log(person);
// accessing elements of object through dot notation
person.name='john';
console.log(person.name);
// accessing elements of object through brackets
person['name']='hari';
console.log(person.name);

// arrays
let selectedColors=['red','yellow','green']
console.log(selectedColors[1])
console.log(selectedColors.length)

// functions

function greet(){
    console.log('hello world');
}

greet()

function greet(name){
    console.log('hello world'+' '+name);
}
greet('hari')

function square(number){
    return number*number;
}

console.log(square(2));

// if conditon
// = is used as assignment operator, == is used as compare operator 
let a=5;
let b=10
if (a%=0){
    console.log('the no is even')

}
else{
    console.log('the no is odd')
}

function test(a){
    if(a<=10 && a>=0){
        return "yes"
    }
}

console.log(test(6))
function test(a){
    if(a<=10 || a>=0){
        return "yes"
    }
}

console.log(test(6))






























