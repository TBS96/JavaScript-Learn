// defining function with parameter:
function addNum(a, b)
{
    // console.log(`Sum of ${a} and ${b} =`, a+b);
    // console.log("Sum of " + a + " and " + b + " =", a+b);

    // to take this outside the function using 'return' value:
    let total= a+b;
    return total;
}

// calling function with arguments:
// addNum(40,60);

// calling function outside with arguments from return value:
const result = addNum(40,90);
console.log(result);