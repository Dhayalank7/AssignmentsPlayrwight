function launchBrowser(Browser)
{
    if(Browser=="Chrome")
    {
        console.log("The browser is Chrome")
    }
    else
    {
        console.log("The browser is Not Chrome")
    }
}

function runTests(TestType)
{
  switch(TestType){
    case "smoke":
        console.log("This is"+TestType+" testing")
        break;

    case "sanity":
        console.log("This is"+TestType+" testing")
        break;
    case "Regression":
        console.log("This is"+TestType+" testing")
        break;  
    default :
        console.log("This is smoke testing")

        
  }   

}

launchBrowser("Chrome")
runTests("Sanity")