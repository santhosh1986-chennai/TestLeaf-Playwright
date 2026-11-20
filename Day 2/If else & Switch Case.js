
let string
function launchBrowser(string)
{
    if(string === "chrome")
    {
        console.log(string)
} 
  else
{
  console.log("Otherwise")
}
}
launchBrowser("chrome")
launchBrowser("Edge")

function runTests(testType)
{
    switch(testType) {
    case "smoke":
        console.log("Testtype is smoke")
    break;
    case "sanity":
        console.log("Testtype is sanity")
        break;
        case "regression":
            console.log("Testtype is regression")
            break;
            default:
                console.log("Testtype is smoke")
                break;
    }
  }
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests(" ")

