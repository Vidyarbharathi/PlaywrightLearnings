import { chromium } from "@playwright/test";

enum environmentUrl{
  admin="http://www.google.com/admin",
  qa="http://www.google.com/qa",
  prod="http://www.google.com/prod"

}

async function loadUrl(env:environmentUrl){
  const browser= await chromium.launch({channel:"chrome",headless:false})
   const context=await browser.newContext()
   const  page=await context.newPage();
   await page.goto(env)
   await page.close();
   await context.close()
   await browser.close()
}


// Object.values(environmentUrl).forEach(url => {
//     loadUrl(url);
//   });


  for (const url in environmentUrl) {
    
      loadUrl(environmentUrl[url as keyof typeof environmentUrl ])
        
    }
  