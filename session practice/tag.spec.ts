
import test from "@playwright/test"

test.use({storageState:"creds/sflogin.json"})
test.beforeEach("Read session storage",async({page})=>{
   await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
})

//test.slow()
test("test 1",{tag:'@smoke'},async({page,browserName})=>{
    test.slow(browserName==="firefox","This test is slow in firefox")
   console.log( await page.title())
   await page.click('.slds-icon-waffle')

})


test("test2",{tag:['@smoke','@regression']},async({page})=>{
   console.log( await page.title())
   await page.click('.slds-icon-waffle')
   await page.click("//button[text()='View All']")
})




test("test3",{tag:'@regression'},async({page})=>{
   console.log( "Regression suite")
   await page.click('.slds-icon-waffle')
   await page.click("//button[text()='View All']")
})
