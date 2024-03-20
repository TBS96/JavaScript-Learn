// function sum()
// {
//     console.log(argument);
// }
// sum(2,6,8,4);
// o/p: [Arguments] { '0': 2, '1': 6, '2': 8, '3': 4 }
// So from above example, we see that 'arguments' works as array.

// To add n nos. of elements using 'arguments' keyword:
function sum()
{
    if(arguments.length === 0)
    {
        console.log("Arguments not found");
    }
    else
    {
        let s = 0;
        for(let i=0; i<arguments.length; i++)
        {
            s += arguments[i];
        }
        // console.log(`Sum = ${s}`);
        return s;
    }
}
// sum();  // o/p: Arguments not found
// sum(2,6,8,4,6,3,1,3);   // o/p: Sum = 33
let result = sum;
console.log(`Sum = ${result(3,8,4)}`);  // o/p: Sum = 15