let a = 5;
let b = 6;
let c = 7;

if(a < b)
{
    if(b < c)
    {
        if(a===c)
        {
            console.log("Condition is true?");
        }
        else
        {
            console.log("a !== c");      //printed
        }
    }
    else
    {
        console.log("Condition is false");
    }
}
else
{
    console.log("A is great.");
}