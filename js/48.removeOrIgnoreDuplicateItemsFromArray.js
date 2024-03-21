// Remove duplicate elements from an array and store the elements in a new array:


const friendsList = ["Roton", "Subhash", "Deepa", "Sayan", "Hrittik", "Chandrani", "Subhash", "Sayan", "Roton"];

function ignoreDuplicates(friendsList)
{
    let newList = [];
    for(let i=0; i<friendsList.length; i++)
    {
        const name = friendsList[i];
        // console.log(name);  /// all names shown
        if(newList.includes(name) === false)
        {
            newList.push(name);
        }
    }
    return newList;
}
const finalResult = ignoreDuplicates(friendsList);
console.log(finalResult);
// o/p:
// [ 'Roton', 'Subhash', 'Deepa', 'Sayan', 'Hrittik', 'Chandrani' ]