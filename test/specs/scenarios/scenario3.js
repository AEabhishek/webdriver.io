describe('amazon',async()=>{
    it('launch the app',async()=>{
        await browser.url("https://www.amazon.in/")
        await browser.maximizeWindow()
        browser.pause(3000)
        const scroll= await browser.$("//a[.='Help']");
        await scroll.scrollIntoView();
        browser.pause(2000)
        scroll.isElementDisplayed()


    })
})