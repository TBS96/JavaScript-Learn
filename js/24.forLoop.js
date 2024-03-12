// To print all odd nos. upto 20, using while loop:
// let i = 1;
// while(i <= 20)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i);
//     }
//     i++;
// }


// Example - 1: To print all odd nos. upto 20, using for loop:
// for(let i = 1; i <= 20; i++)
// {
//     if(i % 2 !== 0)
//     {
//         console.log(i);
//     }
// }


// Example - 2 To loop from 1 to 10 and give a condition, when we get 5, then it will end the loop:
for(let i = 0; i <= 10; i++)
{
    console.log(i);
    if(i === 5)
    {
        console.log("We got 5");
        break;
    }
}