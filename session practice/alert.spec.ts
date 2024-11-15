
import test from '@playwright/test'

test(`Learning to handle alerts`,async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")

page.once('dialog',dialogType=>{
    const message =dialogType.message();
    const alerType=dialogType.type()
    console.log(`${message} from the alert type ${alerType}`)
    if (alerType==='prompt'){
         dialogType.accept("Vidya")
    }else{
    dialogType.dismiss()
    }

})

await page.locator("text=Show").first().click()

await page.locator(".card").filter({hasText:" Confirm Dialog"})
             .locator("//span[text()='Show']").click()

})

test(`Learning to handle frame `,async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

const frameCount= page.frames()
console.log(frameCount.length)

for (const eachFrame of frameCount){
    console.log(await eachFrame.title())
}
})


test.only(`Learning to handle frame using frame object`,async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    
    const firstframelement= page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click")
    console.log(await firstframelement?.innerText())
    await  firstframelement?.click()
    console.log(await firstframelement?.innerText())

    const childFrame=page.frame({url:"https://www.leafground.com/page.xhtml"})?.childFrames()
    
   console.log(childFrame?.length)
   const innerframe=childFrame?.at(0)?.locator("#Click");
   console.log(await innerframe?.innerText())
   await  innerframe?.click()
   console.log(await innerframe?.innerText())

   const frameName=await page.frameLocator("(//iframe)[2]").locator("#Click").innerText()
    console.log(frameName)
})


test.only(`Learning to handle frame using frame object`,async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    
    const firstframelement= page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click")
    console.log(await firstframelement?.innerText())
    await  firstframelement?.click()
    console.log(await firstframelement?.innerText())

    const childFrame=page.frame({url:"https://www.leafground.com/page.xhtml"})?.childFrames()
    
   console.log(childFrame?.length)
   const innerframe=childFrame?.at(0)?.locator("#Click");
   console.log(await innerframe?.innerText())
   await  innerframe?.click()
   console.log(await innerframe?.innerText())

   const frameName=await page.frameLocator("(//iframe)[2]").locator("#Click").innerText()
    console.log(frameName)
})