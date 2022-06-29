
const loginpage = require("../../pageobjects/loginpage")

const fs= require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/propertFile.json"))




describe('vtiger',async()=>
{
    credentials.forEach(({username,password})=>{
        it('launch',async()=>{
            await loginpage.open("http://localhost:8888/")
            await browser.maximizeWindow()
      
            await loginpage.login(username,password)
      

        })
    })





    })