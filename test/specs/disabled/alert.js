describe('vtiger',async()=>{
    it('checkbox',async()=>{

        await browser.url("C:/Users/Abhi%20Akshay/Desktop/WebDriver.io/present.html")
        // C:\Users\Abhi Akshay\Desktop\WebDriver.io\present.html
        const text=await browser.getAlertText()
        console.log("======================gettext============"+text);
        await browser.acceptAlert()
        const text1=await browser.getAlertText() 
        console.log("======================gettext============"+text1);
        await browser.sendAlertText("say aomething")
        await browser.acceptAlert()






    })

}
)