import test from "@playwright/test"
import path from 'path'
import {parse} from 'csv-parse/sync'
import fs from 'fs'


test("File csv",async({page})=>{    
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const data=parse(fs.readFileSync(path.resolve(__dirname,'../.././data/logincredntials.csv'),'utf8'),{
          columns:true,
          skip_empty_lines:true
    })
    for(let eachdata of data){
        console.log(eachdata.testcaseid)
    }  
})

test("File json",async({page})=>{    
    await page.goto("http://leaftaps.com/opentaps/control/main")

const user=JSON.parse(fs.readFileSync(path.join(__dirname,"../.././data/datajs.json"),'utf-8'))
for(let userdata of user){
    console.log(userdata.password)
}  
})
