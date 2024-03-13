function buyGrocery(money)
{
    let eggPrice = 15;
    let qty = money/eggPrice;
    return (
        qty //,
        // eggPrice     //if we want to return multiple things
    );
}
const result = buyGrocery(40);
console.log(result.toFixed(2));