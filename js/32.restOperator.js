// function addToCart(...number)
// {
//     return number;
// }
// console.log(addToCart(100,200,300,400,500));

// Rest operator is denoted by '...'. Rest operator should be given before parameter name, as shown above. After applying rest operator, no matter how many arguments are passed to the receiving parameter, it will show o/p in array form. Rest parameter should always be given at last. The o/p for above f(n) = [ 100, 200, 300, 400, 500 ]


// Now adding more parameters before the rest operator:
function addToCart(num1,num2,...number)
{
    return number;
}
console.log(addToCart(100,200,300,400,500));
// o/p: [ 300, 400, 500 ]
// This is because 100 is sent to num1 and 200 is sent to num2.