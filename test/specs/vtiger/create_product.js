

const fs= require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/propertFile.json"))

const product_page_creation = require("../../pageobjects/create_product_page")
const loginpage = require("../../pageobjects/loginpage")
const sign_out_page = require("../../pageobjects/sign_out")

describe('vtiger',async()=>{
  credentials.forEach(({url,username,password,product_name,product_catogory,manufacture_type,unit_type,productfilepath})=>{

 
    it('launch the app',async()=>
    {
                await loginpage.open(url)        
                await browser.maximizeWindow()
        await loginpage.login(username,password)
        // await expect(browser).toHaveTitleContaining("vtiger CRM 5");


       await product_page_creation.create_product_with_given(product_name,product_catogory,manufacture_type,unit_type,productfilepath)
        // await expect(browser).toHaveTitleContaining("vtiger CRM 5");



         await sign_out_page.sign_out()
      // await expect(browser).toHaveTitleContaining("vtiger");
      await browser.pause(2000)






    })
  })
})