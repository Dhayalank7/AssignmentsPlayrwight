import test, { expect } from '@playwright/test'

test("Alert Assignment",async({page})=>{

await page.goto("https://leafground.com/frame.xhtml")
 let frame= page.frames()
   console.log("framecount"+ frame.length)
await page.frame({url:"https://leafground.com/default.xhtml"})?.locator("#click").click()
expect (await page.frame({url:"https://leafground.com/default.xhtml"})?.locator("#click").textContent()).toEqual("Hurray! You Clicked Me.")
await page.frame({url:"https://leafground.com/framebutton.xhtml"})?.locator("#click").click()
expect (await page.frame({url:"https://leafground.com/framebutton.xhtml"})?.locator("#click").textContent()).toEqual("Hurray! You Clicked Me.")


})