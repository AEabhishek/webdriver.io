describe('hotstar',async()=>{
    it('launching app',async()=>{
        await browser.url("https://www.hotstar.com/in")
        await browser.maximizeWindow()
        await browser.pause(3000)
        let ele=await browser.$("//a[.='Latest & Trending']");
        console.log(await ele.getText());
        await ele.scrollIntoView()
        await browser.pause(3000)
       let s = await browser.$$("//div[.='Latest & Trending']/ancestor::div[@class='tray-wrapper']/descendant::div[@class='content-play']//span")
       console.log(s.lenght);
    // s.forEach(async element => {
    //     var e=element.moveTo()
    //     var t=e.getText()
    //     console.log(t);
    // });
   
  
    })
})