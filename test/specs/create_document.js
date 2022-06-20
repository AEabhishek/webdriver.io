describe('vtiger',async()=>{
    it('launch app',async()=>{
        await browser.url('http://localhost:8888/index.php')
        await browser.maximizeWindow()
        const useranme =await  browser.$("//input[@type='text']")
        useranme.setValue("admin");
        await browser.pause(2000)
        const password = await browser.$("//input[@type='password']")
        password.setValue("admin");
        await browser.pause(2000)
        const login_button =await browser.$("//input[@type='submit']")
        login_button.click();
        await browser.pause(2000)
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");


       var doc_lnk=await browser.$("//a[@href='index.php?module=Documents&action=index']")
       doc_lnk.click()
       await browser.pause(3000)
       await expect(browser).toHaveTitleContaining("document");


       crt_doc_icn=await browser.$("//img[@src='themes/softed/images/btnL3Add.gif']")
       crt_doc_icn.click()
       await browser.pause(3000)


       var title_txt=await browser.$("//input[@name='notes_title']")
       title_txt.setValue("vishwaharshmahasangam")
       await browser.pause(3000)

      await browser.switchToFrame(0)      
       await browser.pause(3000)

       browser.$("//body[@class='cke_show_borders']").setValue("Sir Isaac Newton PRS (25 December 1642 – 20 March 1726/27[a]) was an English mathematician, physicist, astronomer, alchemist, theologian, and author (described in his time as a natural philosopherwidely recognised as one of the greatest mathematicians and physicists of all time and among the most influential scientists. He was a key figure in the philosophical revolution known as the Enlightenment. His book Philosophiæ Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), first published in 1687, established classical mechanics. Newto")
       await browser.pause(6000)

       await browser.keys(['Control','a'])
       await browser.pause(2000)

       await browser.keys(['Control','b']);
       await browser.pause(1000)

       await browser.keys(['Control','i']);
    
       await browser.pause(1000)

       await browser.keys(['Control','u']);

    //    const scroll=await browser.$("//input[@name='filename']")
    //    await scroll.scrollIntoView()
     
        await browser.switchToParentFrame()
        await browser.pause(2000)
        const filePath = 'C:/Users/Abhi Akshay/Desktop/data2.xlsx'
        const remoteFilePath = await browser.uploadFile(filePath)
        await browser.$ ("//input[@name='filename']").setValue(remoteFilePath)
      
       var save_btn=browser.$("//input[@name='filename']/../../../following-sibling::tr/following-sibling::tr/td/div/input[@title='Save [Alt+S]']")
       await save_btn.click();
       await browser.pause(3000)

       
       var mouse_hover=await browser.$("//img[@src='themes/softed/images/user.PNG']")
       await mouse_hover.moveTo()
     
       var sign_out=await browser.$("//a[@href='index.php?module=Users&action=Logout']")
       sign_out.click()
       await browser.pause(3000)
       await expect(browser).toHaveTitleContaining("vtiger");

    
    })
})