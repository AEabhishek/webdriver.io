const loginpage = require("../../pageobjects/loginpage")
const sign_out_page = require ("../../pageobjects/sign_out")
const fs= require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/propertFile.json"))
const document_page = require("../../pageobjects/document")



describe('vtiger',async()=>{
    credentials.forEach(({url,username,password,document_title,note,doc_filePath})=>{

    it('launch app',async()=>{
                await loginpage.open(url)        
                 await browser.maximizeWindow()
        await loginpage.login(username,password)
        await browser.pause(2000)
        // await expect(browser).toHaveTitleContaining("vtiger CRM 5");


      await document_page.create_document(document_title)
    //    await expect(browser).toHaveTitleContaining("document");


     

      await browser.switchToFrame(0)      
       await browser.pause(3000)


       await document_page.handle_frame(note)

       

      

    //    const scroll=await browser.$("//input[@name='filename']")
    //    await scroll.scrollIntoView()
     
        await browser.switchToParentFrame()
        await browser.pause(2000)

        await document_page.upload_and_save(doc_filePath)
        

       
       await sign_out_page.sign_out()
      //  await expect(browser).toHaveTitleContaining("vtiger");

    
    })
})
})