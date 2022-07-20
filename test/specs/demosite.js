describe('demosite',async()=>{
    it('launch',async()=>{
        await browser.url("http://practice.automationtesting.in/")
        await browser.maximizeWindow()
        
        await browser.$("//a[.='Demo Site']").click()
        await browser.$("//a[.='SwitchTo']").moveTo()
        await browser.$("//a[.='Windows']").click()
        await browser.dismissAlert()
        await browser.$("//a[.='Open New Seperate Windows']").click()
        await browser.$("//button[.='click']").click()
        let new_window= await browser.getWindowHandles()
        await browser.switchToWindow(new_window[1])
        await browser.$("//h2[.='News']").scrollIntoView()
        await browser.pause(3000)

    })
})