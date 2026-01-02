import test, { expect } from '@playwright/test'

test("Alert Assignment",async({page})=>{
page.on('dialog',async alerttype=>{
let type:String=alerttype.type()
if(type==="confirm"){
await alerttype.accept()
}

})

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.frameLocator("//iframe[@id='iframeResult']").locator("//h2[text()='JavaScript Confirm Box']/following-sibling::button").click()
expect (await page.frameLocator("//iframe[@id='iframeResult']").locator("#demo").textContent()).toEqual("You pressed OK!")

})


