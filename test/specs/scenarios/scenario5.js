describe('frames',async()=>{
    it('frames',async()=>{
        await browser.url('https://ui.vision/demo/webtest/frames/')
        await browser.maximizeWindow()
        const frame1=await browser.$("//frame[@src='frame_1.html']")
        frame1.waitForDisplayed()
        await browser.switchToFrame(frame1)
        const text1=await browser.$("//input[@name='mytext1']")
        text1.waitForDisplayed()
        text1.setValue("Arun")
        await browser.switchToFrame(null)
        const frame2=await browser.$("//frame[@src='frame_2.html']")
        frame2.waitForDisplayed()
        await browser.switchToFrame(frame2)
        const text2=await browser.$("//input[@name='mytext2']")
        text2.waitForDisplayed()
        text1.setValue("reddy")
        await browser.switchToFrame(null)
        const frame3=await browser.$("//frame[@src='frame_3.html']")
        frame3.waitForDisplayed()
        await browser.switchToFrame(frame3)
        const redio=await browser.$("//div[.='I am a human']")
        redio.waitForDisplayed()
        redio.click()
        await browser.switchToFrame(null)
        const frame4=await browser.$("//frame[@src='frame_4.html']")
        frame4.waitForDisplayed()
        await browser.switchToFrame(frame4)
        const text3=await browser.$("//input[@name='mytext4']")
        text3.waitForDisplayed()
        redio.setValue("H E")
        await browser.switchToFrame(null)
    })
})
