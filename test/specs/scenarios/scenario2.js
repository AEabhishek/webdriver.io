describe('vtiger',async()=>{
    it('launch the app',(async()=>{
        await browser.url("")
        await browser.maximizeWindow()
        var useranme=await browser.$("//input[@name='user_name']")
        await useranme.setValue("admin")
        var password=await browser.$("//input[@name='user_password']")
       await password.setValue("admin")
        var login_btn=await browser.$("//input[@id='submitButton']")
       await  login_btn.click()

        await expect(browser).toHaveTitleContaining("Home")

        var contacts_link=await browser.$("//a[@href='index.php?module=Contacts&action=index']")
        contacts_link.click()

        var check_box=await browser.$("//input[@id='446']")
        check_box.click()
        await browser.isElementSelected("check_box")

        const mouse_hover=browser.$("//img[@src='themes/softed/images/user.PNG']")
        await mouse_hover.moveTo()
        await browser.pause(3000)
        const sign_out= browser.$("//a[@href='index.php?module=Users&action=Logout']")
        sign_out.click()
        await browser.pause(4000)
        await expect(browser).toHaveTitleContaining("vtiger");














    }))
})