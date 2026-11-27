let browser = "Chrome"
function checkBrowserVersion(callback)
{
     
   setTimeout(() => {callback(browser)
    
   }, 2000);
   
}
function ShowBrowserVersion(browserversion) 
{
 console.log("Browser version using callback:", browserversion)
}
checkBrowserVersion(ShowBrowserVersion)








