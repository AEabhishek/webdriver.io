describe('app',async function(){
    this.retries(2)

    it('launch',async function(){
        
    
        browser.url("")
        await browser.maximizeWindow()
        await browser.pause(3000)
        await expect(browser).toHaveTitleContaining("vtiger CRM 5");
    }),
    this.retries(2)
    it('un,pwd',async function(){
        

        const useranme =await browser.$("//input[@type='text']")
        useranme.setValue("admin");
        const password = await browser.$("//input[@type='password']")
        password.setValue("admin");
        const login_button =await browser.$("//input[@type='submit']")
        login_button.click();
        await expect(browser).toHaveTitleContaining("grame");

    })






})