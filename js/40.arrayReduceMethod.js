// Example-1: To add array elements using reduce():

const numbers = [1,2,3,4];

const sumResult = numbers.reduce((prevValue,currValue) => prevValue + currValue, 0);
console.log(sumResult);

// OR

// with anonymous function:
// const sumResult = numbers.reduce(function(prevValue,currValue){
//     console.log(`PreviousValue: ${prevValue} & CurrentValue: ${currValue}`);
//     return prevValue + currValue;
// },0);
// console.log(sumResult);

// 0 is the initial value that is passed to prevValue and numbers[0] i.e., 1 is passed to currValue. reduce() works as loop and it 1st sends 0 and 1 (0+1), it becomes 1. in this way loop goes like: 0 + 1 + 2 + 3 + 4.
// PreviousValue: 0 & CurrentValue: 1
// PreviousValue: 1 & CurrentValue: 2
// PreviousValue: 3 & CurrentValue: 3
// PreviousValue: 6 & CurrentValue: 4
// 10
// so o/p: 10



// Example-2 to add total price of items added in shopping-cart:
const shoppingCart = [
    {
        items: "T-Shirt",
        price: 400
    },
    {
        items: "Watch",
        price: 1200
    },
    {
        items: "Shoe",
        price: 2500
    },
    {
        items: "Jeans",
        price: 600
    },
];

const totalPrice = shoppingCart.reduce((initValue,items) => {
    console.log(`PreviousValue: ${initValue} & CurrentValue: ${items.price}`);
    return initValue + items.price;
},0);
console.log(`Total price = ${totalPrice}`);
// o/p:
// PreviousValue: 0 & CurrentValue: 400
// PreviousValue: 400 & CurrentValue: 1200
// PreviousValue: 1600 & CurrentValue: 2500
// PreviousValue: 4100 & CurrentValue: 600
// Total price = 4700