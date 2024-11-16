import test from "@playwright/test"

test.use({storageState:"creds/sfLogin.json"})
test("Bypass Login",async({page})=>{
   await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
   console.log( await page.title())
})


