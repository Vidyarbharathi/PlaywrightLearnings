import test from "@playwright/test"
import { parse } from "csv-parse/sync"
import fs from 'fs'
import path from 'path'

let csvdata:any[]

test.beforeAll(`Reading data from utitlity file`,async()=>{  
    csvdata=parse(fs.readFileSync(path.resolve(__dirname,'../../data/logisf.csv'),'utf8'),{
         columns:true,
         skip_empty_lines:true
   })
   console.log(csvdata)
})

test.use({storageState:"creds/sflogin.json"})
test.beforeEach("Read session storage",async({page})=>{
   await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
})

test("Bypass Login",async({page})=>{
   console.log( await page.title())
   await page.click('.slds-icon-waffle')
})


test("Bypass Login",async({page})=>{
   console.log( await page.title())
   await page.click('.slds-icon-waffle')
   await page.click("//button[text()='View All']")
})



test.afterEach("Connect jira to raise Ticket",async({request})=>{
     await request.post("")     
})



test.afterAll("attach report/snapshot in jira ",async({request})=>{
   console.log("Uplpoad attachments")    
})