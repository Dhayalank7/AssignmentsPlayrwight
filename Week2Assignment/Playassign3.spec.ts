import test, { expect } from '@playwright/test'

test ("Login salesforce",async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")
await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com")
await page.getByLabel("Password").fill("TestLeaf@2025")
await page.locator("input[id='Login']").click()
await page.waitForTimeout(8000)
 console.log(await page.title())
 await page.locator(".slds-icon-waffle").click()
 await page.waitForTimeout(4000)
await page.getByText("View All").last().click()
await page.getByPlaceholder("Search apps or items...").fill("Service")
await page.locator("(//mark[text()='Service'])[1]").click()
await page.waitForTimeout(8000)
await page.locator("span[class='slds-truncate']").nth(5).click()


})