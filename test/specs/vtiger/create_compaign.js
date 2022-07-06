
// const loginpage = require("../../pageobjects/loginpage")
const compaignpage = require('../../pageobjects/compaign')
const fs= require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/propertFile.json"))
// const sign_out_page = require("../../pageobjects/sign_out")
const product_page = require("../../pageobjects/product_page")
const product_search_page = require("../../pageobjects/product_search_page")



describe('vtiger',async()=>
{
  credentials.forEach(({username,password,compaign_name,compaign_type,compaign_status,expt_res})=>{
    it('launch',async()=>{
      // await loginpage.open("")
      // await browser.maximizeWindow()

      // await loginpage.login(username,password)



      
        // await expect(browser).toHaveTitleContaining("Home");
        // await browser.pause(2000)

           await compaignpage.compaign(compaign_name,compaign_type,compaign_status,expt_res)


           await product_page.product_page()

           

        var switch_window=await browser.getWindowHandles()
       await browser.switchToWindow(switch_window[1])
       await browser.pause(3000)
      //  await expect(browser).toHaveTitleContaining("compaigns");
      await product_search_page.product_window("hammmam")

       await browser.switchToWindow(switch_window[0])
       await browser.pause(2000)

         await product_page.save_button()
        // await expect(browser).toHaveTitleContaining("Campaigns");
      await browser.pause(2000)

        // await sign_out_page.sign_out()
      // await expect(browser).toHaveTitleContaining("vtiger");

      await browser.pause(2000)

    })
  })
})