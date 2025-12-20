import test, { expect } from '@playwright/test'

test("Create a Lead",async({page})=>
{
   await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.locator("#username").fill("Demosalesmanager")
   //await  page.locator("[id='password']").fill("crmsfa")
   await page.locator(".inputLogin").nth(1).fill("crmsfa")
   await page.locator(".decorativeSubmit").click()
   await page.locator("//div[@id='label']/a").click()
   await page.locator("[class='x-panel-header']").nth(1).click()
   await page.locator("//a[text()='Create Lead']").click()
   await page.locator("(//input[@name='companyName'])[2]").fill("Infosys")
   await page.locator("(//input[@name='firstName'])[3]").fill("Dhayalan")
   await page.locator("(//input[@name='lastName'])[3]").fill("K")
   await page.locator("input[name='personalTitle']").fill("Mr.")
   await page.locator("input[name='generalProfTitle']").fill("Tech Lead")
   await page.locator("input[name='annualRevenue']").fill("15LPA")
   await page.locator("input[name='departmentName']").fill("Testing")
   await page.locator("input[name='primaryPhoneNumber']").nth(3).fill("8939271081")
   await page.locator("input[value='Create Lead']").click()
   await expect (page.locator("#viewLead_companyName_sp")).toContainText("Infosys")
   await expect (page.locator("#viewLead_firstName_sp")).toContainText("Dhayalan")
   await expect (page.locator("#viewLead_lastName_sp")).toContainText("K")
   await expect (page.locator("#viewLead_statusId_sp")).toContainText("Assigned")
   
  console.log(await page.title())
}
)
