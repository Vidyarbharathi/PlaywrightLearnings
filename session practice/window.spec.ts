import test from "@playwright/test"
import path from 'path'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import credentials from "../session practice/daa.json"

test(`WindowHandling`,async({context,page})=>{
    await page.goto("https://www.amazon.in/",{waitUntil:'domcontentloaded'})
    await page.locator("#twotabsearchtextbox").fill("phones")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    const windowPromise=context.waitForEvent('page')
    await page.locator("//span[contains(text(),'Redmi Note')]").nth(0).click()
    const redmiWindow=await windowPromise;
    await page.waitForTimeout(3000)
    await redmiWindow.bringToFront()
    console.log(await redmiWindow.title())    
})


test.only(`WindowHandling using promise all`,async({context,page})=>{

    test.setTimeout(120000)
    await page.goto("https://www.leafground.com/window.xhtml",{waitUntil:'domcontentloaded'})

    const [allWinPromise]=await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple",{exact:true}).click()
   ] )

   const allWindows=allWinPromise.context().pages();
   console.log(allWindows.length)
   
  allWindows.forEach(async element => {
     console.log(element.url())
   });
    let tab:any
    for(let i=0;i<allWindows.length;i++){
        const title=await allWindows[i].title()      
                 if(title==="Web Table"){
            tab=allWindows[i]            
        }   
    }

    await tab.bringToFront()
      // await tab.locator("//input[@placeholder='Search']").fill("Russia")
    await tab.locator("(//i[@class='pi pi-search'])[2]/following-sibling::input").fill("Australia")

})

test("File Upload",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")

    //using setInput files

    await page.locator(".card").filter({hasText:"Basic Upload"})
    .locator("input[type='file']").setInputFiles(path.resolve(__dirname,"sample.txt"))

    //using fileChooser
    // const filePromise= page.waitForEvent('filechooser')
    //  await page.locator("[class$='ui-icon-plusthick']").last().click()
    //  const fileupload=await filePromise;
    //  const boolean= fileupload.isMultiple()
    //  await fileupload.setFiles(["./tests/day08/testleaf_logo.jpeg","./tests/day08/sf.jpg"])
})
test("File csv",async({page})=>{
    
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //using setInput files

    const data=parse(fs.readFileSync(path.join(__dirname,'loginData.csv'),'utf8'),{
          columns:true,
          skip_empty_lines:true
    })

    for(let eachdata of data){
        console.log(eachdata.testcaseid)
    }


    data.forEach(element => {
        console.log(element.username)
    });
   

    for(let user of credentials){
        console.log(user.username)
    }

const user=JSON.parse(fs.readFileSync(path.join(__dirname,"daa.json"),'utf-8'))


for(let userdata of user){
    console.log(userdata.password)
}
  
})
