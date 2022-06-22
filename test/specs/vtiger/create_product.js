describe('vtiger',async()=>{
    it('launch the app',async()=>
    {
        await browser.url('http://localhost:8888/index.php')
        await browser.maximizeWindow()
        const useranme =await  browser.$("//input[@type='text']")
        useranme.setValue("admin");
        const password = await browser.$("//input[@type='password']")
        password.setValue("admin");
        const login_button =await browser.$("//input[@type='submit']")
        login_button.click();
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");


        let product_link=await browser.$("//a[@href='index.php?module=Products&action=index']")
        await product_link.click()
        await browser.pause(2000)
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");



        let creat_product_icn=await browser.$("//img[@src='themes/softed/images/btnL3Add.gif']")
        await creat_product_icn.click()
        await browser.pause(2000)



        let product_name_txt=await browser.$("//input[@name='productname']")
        await product_name_txt.setValue("mango7890")
        await browser.pause(3000)


        let product_catogory=await browser.$("//select[@name='productcategory']")
        await product_catogory.selectByVisibleText('Hardware')
        await browser.pause(2000)


        let manufacture_drpdn=await browser.$("//select[@name='manufacturer']")
        await manufacture_drpdn.selectByVisibleText('LexPon Inc.')
        await browser.pause(2000)


        let usage_Unit_drpdn=await browser.$("//select[@name='usageunit']")
        await usage_Unit_drpdn.selectByVisibleText('Carton')
        await browser.pause(2000)


        const filePath = 'C:/Users/Abhi Akshay/Desktop/data2.xlsx'
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.$ ("//input[@id='my_file_element']").setValue(remoteFilePath)
        await browser.pause(2000)

        
      let save_btn =await browser.$("//input[@title='Save [Alt+S]']")
      await save_btn.click()
      await browser.pause(2000)
      

      const mouse_hover=browser.$("//img[@src='themes/softed/images/user.PNG']")
      await mouse_hover.moveTo()
      await browser.pause(2000)
      const sign_out= browser.$("//a[@href='index.php?module=Users&action=Logout']")
      sign_out.click()
      // await expect(browser).toHaveTitleContaining("vtiger");
      await browser.pause(2000)






    })
})