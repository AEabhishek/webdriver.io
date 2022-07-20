describe('google',async()=>{
    it('launch',async()=>{
        await browser.url("https://www.google.com/")
        await browser.maximizeWindow()
        await browser.$("//input[@class='gLFyf gsfi']").setValue("Abhishek")
        await browser.wait
        var d=await browser.$$("//div[@class='mkHrUc']//ul[@class='G43f7e']//span")
        await d.waitForDisplayed(5000)
        d.forEach(async element => {
           var t= await element.getText()
           console.log(t);
            
        });
        

    })
})