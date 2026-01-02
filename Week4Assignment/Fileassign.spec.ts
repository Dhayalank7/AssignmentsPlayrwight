import test, { expect } from '@playwright/test'
import fs from 'fs'

test ("file upload",async({page,context})=>{

// page.goto("https://the-internet.herokuapp.com/upload")

// const upload=await page.locator("//input[@type='file']").first()
// await upload.setInputFiles("Data/data1.png")

// const prom =  page.waitForEvent('filechooser')
// await page.locator("#drag-drop-upload").click()
// const upload1=await prom
// await upload1.setFiles("Data/data.png")
// await page.locator("//input[@value='Upload']").click()
// await expect(page.locator("//div[@id='uploaded-files']")).toHaveText("data1.png")
await page.goto("https://the-internet.herokuapp.com/download")
const prom1=page.waitForEvent('download')
await page.locator("//a[text()='data.png']").click()
const download=await prom1

await download.saveAs('Data/data2.png')
expect(fs.existsSync('Data/data2.png')).toBeTruthy()


})