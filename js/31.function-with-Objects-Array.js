// Funtion with object:

// const products = {
//     names: 'Laptop',
//     price: 52000,
//     color: 'Grey'
// }

// const cars = {
//     names: 'TATA',
//     price: 280000,
//     color: 'Black'
// }

// function addToProduct(anyObj)
// {
//     console.log(`Product name is: ${anyObj.names} , price is: ${anyObj.price} and color is: ${anyObj.color}`);
// }

// calling functions with object names as arguments:
// addToProduct(products);
// addToProduct(cars);

// or, we can simply write objects as arguments while calling fuction:
// addToProduct({
//     names: 'Mobile',
//     price: 20000,
//     color: 'Dark Nebula'
// });

// addToProduct({
//     names: 'TATA',
//     price: 280000,
//     color: 'Black'
// });



// Funtion with array:
// const a = [100, 103, 105, 102];

// function arrayElements(anyArray)
// {
//     console.log(`Array any element ${anyArray[2]}`);
// }

// arrayElements(a);

// or we can do the same by declaring array elements as arguments when calling function:

function arrayElements(anyArray)
{
    console.log(`Array any element ${anyArray[2]}`);
}

arrayElements([100, 103, 105, 104]);




/*
    Here, 'anyArray' acts as a receiver parameter which is receiving parameters passed in arrayElements() while calling, i,e., arrayElements([100, 103, 105, 104]). "[100, 103, 105, 104]" acts as sender.

    Same implies with addToProduct with objects.
*/