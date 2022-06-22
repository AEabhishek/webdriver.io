describe('jquery_app',async()=>{
it('launch the app',async()=>{
    await browser.url("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
    await expect(browser).toHaveUrl("C")
    await browser.maximizeWindow()
    var markup_radio_button1=await browser.$("//label[@id='radio-choice-0b']")
   markup_radio_button1.click();

    await browser.pause(3000)
    // await browser.isElementEnabled("markup_radio_button1")





})






})