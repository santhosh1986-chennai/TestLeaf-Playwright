let Palindrome = "listen"
function reverse(Palindrome)
{
let Output = ""
let reverse = Palindrome.split("")
//console.log(reverse)
for(i = reverse.length-1; i>=0; i--)
{
   Output += reverse[i]
}
console.log(Output)

function match(Palindrome)
{
 if(Palindrome === Output)
   {
      console.log("True")
 } else 
   {
      console.log("False")
   }
}
match(Palindrome)
}
reverse(Palindrome)
reverse("madam")





