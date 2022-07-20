describe('app',async()=>{
    it('launch app',async()=>{
        await browser.url("https://demoqa.com/")
        await browser.maximizeWindow()
        await browser.$("//div[@class='card-up']/ancestor::div[@class='category-cards']/descendant::h5[.='Alerts, Frame & Windows']").click();
        await browser.$("//li[@id='item-1']/ancestor::div[@class='accordion']/descendant::div[.='Alerts, Frame & Windows']").click()
        await 
    })
})