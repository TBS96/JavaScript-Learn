let x=2;
switch(x)
{
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Error");
}


// Taking as user input in Node-js:
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter value of x: ', (x) => {
//     x = parseInt(x);
//     switch(x) {
//         case 0:
//             console.log("Zero");
//             break;
//         case 1:
//             console.log("One");
//             break;
//         case 2:
//             console.log("Two");
//             break;
//         default:
//             console.log("Error");
//     }
//     readline.close();
// });
