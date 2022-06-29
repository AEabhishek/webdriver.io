const loginpage = require("../../pageobjects/loginpage");

// class login extends loginpage
describe('fb',async()=>{

    it('launch app',async()=>{
        browser.url('https://www.facebook.com/login/')
        await browser.maximizeWindow()
        await browser.pause(3000)
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");


        const useranme=browser.$("//input[@id='email']")
        useranme.setValue("9110212128")
        await browser.pause(3000)

        const password = browser.$("//input[@id='pass']")
        password.setValue("abhishek")
        await browser.pause(3000)

        const lgn_button=browser.$("//button[@id='loginbutton']")
        lgn_button.click()
        await browser.pause(5000)

        // const err1=(await browser.$("//div[@class='_9ay7']")).getText()
        // console.log(err1);



        await browser.waitUntil(
            async () => (await (await $("//div[@class='_9ay7']")).getText('class')) === "The password that you've entered is incorrect. ",
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different'
            }
        );





    })







})