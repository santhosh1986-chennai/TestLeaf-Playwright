let intro = "Hello World"
function length(intro)
{
   let split = (intro.split(" "))
   console.log(split)
   let lastword = split[split.length-1]
   console.log(lastword)
  let calculate = lastword.length
   console.log(calculate)
}
length(intro)

let string =  "   fly me   to   the moon  " 
function manipulate(string)
    {
   let Trim = string.trim()
  console.log(Trim)
  let Splitted = Trim.split(" ")
    console.log(Splitted)
  let Lastword = Splitted[Splitted.length-1]
    console.log(Lastword)
   let calculate = Lastword.length
    console.log(calculate)
    return calculate
    }
manipulate(string)

let string1 = "LiStEn "
let string2 = "siLeNt "
function anagram(string1, string2)
{
    let samecase1 = string1.trim().toLowerCase()
    let samecase2 = string2.trim().toLowerCase()
    console.log(samecase1)
    console.log(samecase2)
    let sort1 = samecase1.split("").sort().join("")
    console.log(sort1)
    let sort2 = samecase2.split("").sort().join("")
    console.log(sort2)
        return sort1 === sort2
         
}
console.log(anagram(string1, string2))
console.log(anagram("Hello ", "World  "))








