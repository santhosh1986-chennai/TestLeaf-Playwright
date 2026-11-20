let number
function NumberType(number)
{
    if(number > 0)
    {
        console.log ("It is a positive number")
    } else if (number < 0)
    {
        console.log("It is a negative number")
    } else 
    {
       console.log("It is a neutral number") 
    }
}
NumberType(1)
NumberType(-1)
NumberType(0)