import {test, expect } from '@playwright/test'

test("Login salesforce",async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")  
await page.locator ("input[id='username']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator(".input.r4.wide.mb16.mt8.password").fill("TestLeaf@2025")
await page.locator("input[id='Login']").click()
await page.locator(".slds-icon-waffle").click()
await page.locator("//button[@class='slds-button']").nth(1).click()
await page.getByPlaceholder("Search apps or items...").fill("Accounts")
await page.locator("(//mark[text()='Accounts'])[1]").click()
await page.getByTitle("New").first().click()
await page.waitForTimeout(1000)
await page.getByRole("textbox",{name:"Name"}).fill("TEST67")
await page.locator("//label[text()='Type']/parent::span//following-sibling::div[1]//button").click()
await page.locator("//span[@title='Prospect']").click()
await page.locator("//label[text()='Industry']/parent::span//following-sibling::div[1]//button").click()
await page.locator("//span[@title='Banking']").click()
//await page.getByText("Save").first().click()
await expect(page.locator("//button[@name='SaveEdit']")).toBeEnabled()
await page.locator("//button[@name='SaveEdit']").click()
//expect( await page.title()).toContain("TESTDhaya")
//await page.locator("(//div[@title='Upload Files'])[3]").waitFor({state:'visible'})
await page.waitForTimeout(5000)
//await expect (page.locator("(//slot[@name='tabs'])[5]//div[@title='Upload Files']")).toBeVisible()
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(5000)
const assign1=page.waitForEvent("filechooser")
await page.evaluate(() => {
  window.scrollBy(0, 500); // Scrolls down 500 pixels from current position
});
await page.locator("//div[@title='Upload Files']").click()
   // page.getByRole("button", {name:'Upload Files' })
    const upload = await assign1
await upload.setFiles("Data/test.pdf")
await page.locator("//span[text()='Done']").click()
//await expect(page.locator("//div[@id='uploaded-files']")).toHaveText("test.pdf")
await expect(page.locator("(//span[@Title='test'])[1]")).toHaveText("test")

}
)