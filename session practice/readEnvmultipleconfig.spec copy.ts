import test from "@playwright/test"


test("File env",async()=>{        
    const uname=process.env.LF_Username as string
    const url=process.env.baseURL as string
    console.log(uname)
})


