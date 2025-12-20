import test, { expect } from '@playwright/test'

test("Edit a Lead",async({page})=>
{
   await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.locator("#username").fill("Demosalesmanager")
   //await  page.locator("[id='password']").fill("crmsfa")
   await page.locator(".inputLogin").nth(1).fill("crmsfa")
   await page.locator(".decorativeSubmit").click()
   await page.locator("//div[@id='label']/a").click()
   await page.locator("[class='x-panel-header']").nth(1).click()
   await page.locator("//a[text()='Find Leads']").click()
   await page.locator("[id='ext-gen248']").fill("Dhayalan")
   await page.locator("//button[text()='Find Leads']").click()
   await page.locator("((//table[@class='x-grid3-row-table'])[1]/tbody/tr/td/div/a)[1]").click()
   await page.locator("//a[text()='Edit']").click()
   await page.locator("(//input[@name='companyName'])[2]").fill("Infosys Ltd")
   await page.locator("input[name='annualRevenue']").fill("16LPA")
   await page.locator("input[name='departmentName']").fill("Testing Field")
   await page.locator("textarea[name='description']").fill("Edit Lead")
   await page.locator("[name='submitButton']").first().click()
     
}
)
