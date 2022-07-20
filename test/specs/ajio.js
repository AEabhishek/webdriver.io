describe('ajio',async()=>{
    it('launch the app',async()=>{
        await browser.url("https://www.ajio.com/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await browser.$("//a[@href='/shop/kids']").moveTo()
        await browser.pause(2000)
        await browser.$("//a[@href='/toys%20&%20baby%20care-toy-guns-accessories/c/831101012']").click()
        await browser.pause(2000)
        await browser.$("//div[.='Elite 2.0 Echo Cs-10 Blaster']/ancestor::div[@class='preview']/descendant::img[@class='rilrtl-lazy-img  rilrtl-lazy-img-loaded']").click()
        await browser.pause(3000)
        var switch_window=await browser.getWindowHandles()
        console.log(switch_window);
         await browser.switchToWindow(switch_window[1])
         console.log(await browser.getTitle());
        // await browser.pause(3000)
        await browser.$("//span[.='ADD TO BAG']").click()
    })
})