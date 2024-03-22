const phones = [
    {id: 1, pName: "iPhone 15 Pro Max", price: 165000},
    {id: 2, pName: "Redmi Note 10 Pro Max", price: 20000},
    {id: 3, pName: "Samsung Galaxy S32", price: 28500},
    {id: 4, pName: "iPhone 15 Pro", price: 127000},
    {id: 5, pName: "Redmi Note 10 Pro", price: 18000},
    {id: 6, pName: "Redmi Note 10", price: 16000},
    {id: 7, pName: "Redmi Note 10S", price: 16500},
    {id: 8, pName: "Redmi Note 11S", price: 11500},
    {id: 9, pName: "Redmi Note 11 Pro+ 5G", price: 22500},
    {id: 10, pName: "samsung galaxy M32", price: 11000},
];

// With normal function:
// function matchProducts(phones,search)
// {
//     const matchingPhones = [];
//     for(const phone of phones)
//     {
//         if(phone.pName.toLowerCase().includes(search.toLowerCase()))
//         {
//             matchingPhones.push(phone);
//         }
//     }
//     return matchingPhones;
// }
// const result = matchProducts(phones,"redmi");
// console.log(result);
// o/p:
// [
//     { id: 2, pName: 'Redmi Note 10 Pro Max', price: 20000 },
//     { id: 5, pName: 'Redmi Note 10 Pro', price: 18000 },
//     { id: 6, pName: 'Redmi Note 10', price: 16000 },
//     { id: 7, pName: 'Redmi Note 10S', price: 16500 },
//     { id: 8, pName: 'Redmi Note 11S', price: 11500 },
//     { id: 9, pName: 'Redmi Note 11 Pro+ 5G', price: 22500 }
// ]


// With arrow function:
const searchPhones = (phones,search) =>{
    const matchingPhones = [];
    for(const phone of phones)
    {
        // console.log(phone.pName.includes(search));
        if(phone.pName.toLowerCase().includes(search.toLowerCase()))
        {
            matchingPhones.push(phone);
        }
    }
    return matchingPhones;
}
const result = searchPhones(phones,"samSung");
console.log(result);
// o/p:
// [
//     { id: 3, pName: 'Samsung Galaxy S32', price: 28500 },
//     { id: 10, pName: 'samsung galaxy M32', price: 11000 }
// ]