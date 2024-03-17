// Arrow function is newly introduced in JS version ES6.


// Normal function declaration (traditional way):
function normalFunc(n1,n2)
{
    return n1+n2;
}
console.log(`Using normal function = ${normalFunc(10,20)}`);       // o/p: 30


// With arrow function:

const arrowFunc = (n1,n2) =>
{
    return n1+n2;
}
console.log(`Using arrow function = ${arrowFunc(10,50)}`);  // o/p: 60


// Simplifying arrow function (only use when we have & want to return single line code inside the function. not receommended if we have multilines of code inside the function):

const arrowFunc1 = (n1,n2) => n1+n2;
console.log(`Using arrow function(simplified) = ${arrowFunc1(1,97)}`);  // o/p: 98


// Simplifying the above arrowFunc1() more (if we have one parameter & one return code):
const arrowFunc2 = n => n;
console.log(arrowFunc2("Prantik"));     // o/p: Prantik


// Simplifying the above arrowFunc1() more (if we dont have any receiving parameter):
const arrowFunc3 = () => Math.round(Math.random()*6);
console.log(arrowFunc3());  // o/p: random nos. from 0-6 rounded off