// Local variables are those that are declared within or inside a function. These variables can only be accessed within the function in which they are declared.

// Global variables are those variables which are declared outside of all the functions or block and can be accessed globally in a program. It can be accessed by any function present in the program.

let b = 'Programmer';   //global variable
function func1()
{
    let a = 'Hello Function-1';   //local variable
    console.log(`Printing local variable of func1(): ${a}`);     // printing local variable
    console.log(`Printing global variable inside func1(): ${b}`);     // printing global variable inside function
}
function func2()
{
    let a = "Hello Function-2";
    console.log(`Printing local variable of func2(): ${a}`);
    console.log(`Printing global variable inside func1(): ${b}`);
}
func1();
func2();
console.log(`Printing global variable outside the functions: ${b}`);   // printing global variable outside function