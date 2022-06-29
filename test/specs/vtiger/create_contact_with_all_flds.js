
const create_contact_Page =require("../../pageobjects/contacts_page")
const organisation_page =require ("../../pageobjects/organisation_search_page")
const fs= require('fs')
const loginpage = require("../../pageobjects/loginpage")
const credentials = JSON.parse(fs.readFileSync("test/testdata/propertFile.json"))
const sign_out_page = require("../../pageobjects/sign_out")
describe('vtiger',async()=>{
    credentials.forEach(({url,username,password,fname_extension,lead_source,contact_lastname,path,organisation_name})=>{
        it ('launching application',async()=>{
            await loginpage.open(url)
            await browser.maximizeWindow()
            browser.pause(3000)
            // await expect(browser).toHaveTitleContaining("vtiger CRM 5");
    
            await loginpage.login(username,password)
         
            await browser.pause(3000)
    
            await create_contact_Page.Create_contact(fname_extension,lead_source,contact_lastname)
            
            await browser.pause(3000)

         
           
    
           var switch_window=await browser.getWindowHandles()
           await browser.switchToWindow(switch_window[1])

           await browser.pause(3000)
           
           await organisation_page.organisation_window(organisation_name)
    
           await browser.switchToWindow(switch_window[0])
           await browser.pause(2000)

           await create_contact_Page.contacts_scroll(path)
    
       
    
       


        await sign_out_page.sign_out()
    
    
    
    
        })
    })
    





})

//  await expect(error_message).toHaveText("You must specify a valid username and password.")