describe('frames',async()=>{
    it('launch the browser',async()=>{
        await browser.url("https://ui.vision/demo/webtest/frames/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        await browser.switchToFrame(0)

        var frame1=await browser.$("//input[@name='mytext1']")
        await frame1.setValue("hi")
        await browser.pause(2000)
        await browser.switchToParentFrame()

        await browser.switchToFrame(1)
        var frame2=await browser.$("//input[@name='mytext2']")
        await frame2.setValue("hello")
        await browser.switchToParentFrame()
        await browser.pause(2000)

           
        await browser.switchToFrame(3)
        // var frame4=await browser.$("//input[@name='mytext4']")
        await frame4.setValue("morning")
        await browser.pause(2000)
           await browser.switchToParentFrame()

        // await browser.switchToFrame()

        
        // var iframe=await browser.$("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
        await browser.switchToFrame(2)
        var frame3=await browser.$("//input[@name='mytext3']")
        await frame3.setValue("good")
       
           await browser.pause(2000)
        await browser.switchToFrame(0)
        await browser.pause(2000)
        var fild=await browser.$("//span[.='I am a human']")
        await fild.click()

        const scroll=await browser.$("//img[@src='https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg']")
        scroll.scrollIntoView()

        var check_box=await browser.$("//span[.='Web Testing']")
        check_box.click()

        var drpdn= await browser.$("//span[.='Choose']")
        await drpdn.click()
        await browser.pause(5000)

        var select=await browser.$("//div[@class='OA0qNb ncFHed QXL7Te']/div[@class='MocG8c HZ3kWc mhLiyf LMgvRb']")
        await select.click()
        await browser.pause(2000)






    })
})