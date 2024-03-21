// "use strict"    // if we write this on top, then it will show errors that are commonly ignored by JS.

// Example-1:
// let a = "Hello";

// o/p:

// a = "Hello";
//   ^

// ReferenceError: a is not defined
//     at Object.<anonymous> (G:\CSE\B.Tech\CSE\PROGRAMS-PRACTICE\WEB-DEV-BOOTCAMP\JavaScript-Learn\js\49.useStrictMode-ErrorHandling.js:3:3)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49



// Example-2:
// function test()
// {
//     let b = 20;
// }
// test();

// o/p:

// b = 20;
// ^

// ReferenceError: b is not defined
// at test (G:\CSE\B.Tech\CSE\PROGRAMS-PRACTICE\WEB-DEV-BOOTCAMP\JavaScript-Learn\js\49.useStrictMode-ErrorHandling.js:23:7)
// at Object.<anonymous> (G:\CSE\B.Tech\CSE\PROGRAMS-PRACTICE\WEB-DEV-BOOTCAMP\JavaScript-Learn\js\49.useStrictMode-ErrorHandling.js:25:1)
// at Module._compile (node:internal/modules/cjs/loader:1376:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
// at Module.load (node:internal/modules/cjs/loader:1207:32)
// at Module._load (node:internal/modules/cjs/loader:1023:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
// at node:internal/main/run_main_module:28:49



// Example-3:
// function fun(num1, num2, num2)
// {
//     console.log(num1 + num2 + num2);
// }
// fun(5, 3, 7);

// o/p:
// function fun(num1, num2, num2)
//                          ^^^^

// SyntaxError: Duplicate parameter name not allowed in this context
//     at internalCompileFunction (node:internal/vm:77:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1288:20)
//     at Module._compile (node:internal/modules/cjs/loader:1340:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

// End of "use strict"




// Example-4:
function func(a,b)
{
    // if(typeof a !== 'number' || typeof b !== 'number')
    // {
    //     return "Enter a number & try again!!!";
    // }
    return a+b;
}
// const sum = func("5",6);
const sum = func(5+6);
console.log(sum);   // o/p: NaN