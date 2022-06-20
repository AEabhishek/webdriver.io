describe('vtiger',async()=>{
    it ('launching application',async()=>{
        const vtiger_url=browser.url('http://localhost:8888/index.php')
        await browser.maximizeWindow()
        browser.pause(3000)
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");


        const useranme = browser.$("//input[@type='text']")
        useranme.setValue("admin");
        await browser.pause(3000)
        const password = browser.$("//input[@type='password']")
        password.setValue("admin");
        await browser.pause(3000)

        const login_button =browser.$("//input[@type='submit']")
        login_button.click();
        await browser.pause(3000)

        const contacts_link=browser.$("//a[@href='index.php?module=Contacts&action=index']")
        await browser.pause(3000)
        await contacts_link.click()

       const create_ct_icn=browser.$("//img[@src='themes/softed/images/btnL3Add.gif']")
       create_ct_icn.click()
       await browser.pause(3000)

       var fname_drpdn=browser.$("//select[@name='salutationtype']")
       await (await fname_drpdn).selectByVisibleText("Prof.")
       await browser.pause(2000)
    

       

       var ld_src=browser.$("//select[@name='leadsource']")
       await ld_src.selectByVisibleText("Employee")
       await browser.pause(2000)

       const lname_txt=browser.$("//input[@name='lastname']")
       lname_txt.setValue("suresh")
       await browser.pause(2000)

      

       const org_icn=browser.$("//input[@name='account_name']//..//img")
       org_icn.click()
       await browser.pause(3000)

       var switch_window=await browser.getWindowHandles()
       await browser.switchToWindow(switch_window[1])
       await browser.pause(3000)


       const srch_field=await browser.$("//input[@id='search_txt']")
       await browser.pause(3000)

       srch_field.setValue('aran')
       await browser.pause(3000)

       const srh_btn=await browser.$("//input[@name='search']")
       srh_btn.click()
       

       const select_element = browser.$("//a[@id='1']")
       await select_element.click()
       await browser.pause(3000)

       await browser.switchToWindow(switch_window[0])
       await browser.pause(2000)

       var scroll=browser.$("//input[@name='imagename']")
       await scroll.scrollIntoView()
       await browser.pause(2000)

       const path="C:/Users/Abhi Akshay/Desktop/938590-money-heist.jpg"
       await $ ("//input[@name='imagename']").setValue("C:/Users/Abhi Akshay/Desktop/938590-money-heist.jpg")
       await browser.pause(2000)
       

       const save_btn=browser.$("//input[@class='crmButton small save']")
       save_btn.click()
       await browser.pause(3000)

        const mouse_hover=browser.$("//img[@src='themes/softed/images/user.PNG']")
        await mouse_hover.moveTo()
        await browser.pause(3000)
        const sign_out= browser.$("//a[@href='index.php?module=Users&action=Logout']")
        sign_out.click()
        await browser.pause(4000)
        await expect(browser).toHaveTitleContaining("vtiger");




        // const error_message = browser.$("//div[@class='errorMessage']")
        // await browser.pause(3000)
        //     await browser.waitUntil(
        //         async () => (await (await $('.errorMessage')).getText('class')) === "You must specify a valid username and password.",
        //         {
        //             timeout: 5000,
        //             timeoutMsg: 'expected text to be different'
        //         }
        //     );



    })





})

//  await expect(error_message).toHaveText("You must specify a valid username and password.")