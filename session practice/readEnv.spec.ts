import test from "@playwright/test"
import dotenv from 'dotenv'

dotenv.config({path:"data/testing.env"})

test.only("File env ",async()=>{        
    // // const uname=process.env.LF_Username as string
    // // console.log(uname)
    // console.log(process.env.username)
    // console.log(process.env.PATH);
    const uname=process.env.LF_Username as string
    const url=process.env.baseURL as string
    console.log(url)
})

test("Read multiple env file ",async()=>{ 
  const envData=  process.env.EnvFile
  dotenv.config({path:`data/${envData}.env`})
  const uname=process.env.LF_Username
  console.log(uname)
})


