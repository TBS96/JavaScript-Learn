// Promise has 3 steps:
// 1. Pending: works usually with setTimeout().
// 2. Resolve
// 3. Reject


// const willMarry = true;

// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(willMarry)
//         {
//             resolve('Success');
//         }
//         else
//         {
//             reject('Sorry...');
//         }
//     },2000);
// }).then((value) => {
//     // console.log('Promise has been kept');
//     console.log(value);
// }).catch((error) => {
//     // console.log('Sorry.. I cant marry you.');
//     console.log(error);
// })

// o/p: Promise has been kept


// Doing the above Promise function again, storing it in a variable:
const willBuy = false;

function promiseOne()
{
    const myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(willBuy)
            {
                resolve("Can afford");
            }
            else
            {
                reject("Cant afford");
            }
        },3000);
    });
    return myPromise;
}
// above, we're defining 'Promise' in myPromise variable which is in promiseOne().

promiseOne()
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
// above, we've called 'Promise' which is in myPromise variable, which is in promiseOne().

// o/p: Cant afford



// Note:
// From LOC 9-19, we are defining Promise. from LOC 20-26, we are calling function using then() and catch().
// then() gets data from 'resolve' and catch() gets data from 'reject'.
// also 'value' parameter gets data from 'resolve' and 'error' parameter gets data from 'reject'.