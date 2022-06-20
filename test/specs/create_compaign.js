describe('vtiger',async()=>
{
    it('launch',async()=>{
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
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");
        await browser.pause(2000)

        let more_mouse_hover=await browser .$("//img[@src='themes/softed/images/menuDnArrow.gif']")
        await more_mouse_hover.moveTo()
        await browser.pause(2000)

        let compaign_link=await browser.$("//a[@name='Campaigns']")
        await compaign_link.click()
        await browser.pause(2000)
        await expect(browser).toHaveTitleContaining("Campaigns");


        let create_comp_icn= await browser.$("//img[@src='themes/softed/images/btnL3Add.gif']")
        await create_comp_icn.click()
        await browser.pause(2000)

        let compaign_name= await browser.$("//input[@name='campaignname']")
        await compaign_name.setValue("garuda")
        await browser.pause(2000)

        let compaign_type=await browser.$("//select[@name='campaigntype']")
        await compaign_type.selectByVisibleText("Public Relations")
        await browser.pause(2000)

        let compaign_status=await browser.$("//select[@name='campaignstatus']")
        await compaign_status.selectByVisibleText("Planning")
        await browser.pause(2000)

        let expt_resp=await browser.$("//select[@name='expectedresponse']")
        await expt_resp.selectByVisibleText("Excellent")
        await browser.pause(2000)


        let product_icn=await browser.$("//img[@src='themes/softed/images/select.gif']")
        await product_icn.click()
        await browser.pause(2000)

        var switch_window=await browser.getWindowHandles()
       await browser.switchToWindow(switch_window[1])
       await browser.pause(3000)
       await expect(browser).toHaveTitleContaining("compaigns");



       let srh_txt=await browser.$("//input[@name='search_text']")
       await srh_txt.setValue("hammam")
       await browser.pause(2000)

       let srh_btn=await browser.$("//input[@name='search']")
       await srh_btn.click()
       await browser.pause(2000)

       let select_choice=await browser.$("//a[@id='1']")
       await select_choice.click()
       await browser.pause(2000)

       await browser.switchToWindow(switch_window[0])
       await browser.pause(2000)


        let save_btn=await browser.$("//input[@title='Save [Alt+S]']")
        await save_btn.click()
        await browser.pause(2000)
        await expect(browser).toHaveTitleContaining("Campaigns");


        const mouse_hover=browser.$("//img[@src='themes/softed/images/user.PNG']")
      await mouse_hover.moveTo()
      await browser.pause(2000)
      const sign_out= browser.$("//a[@href='index.php?module=Users&action=Logout']")
      sign_out.click()
      await expect(browser).toHaveTitleContaining("vtiger");

      await browser.pause(2000)

    })
})