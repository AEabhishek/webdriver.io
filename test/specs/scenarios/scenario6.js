describe('app',async()=>{
    it('launch',async()=>{
    await browser.url(" ")
    // await browser.maximizeWindow()
    // await browser.$().setValue()
    // await browser.$().setValue()
    // await browser.$().click()

    const ele=await browser.getWindowHandles()
         ele.switchToWindow()
    
    })  
    })