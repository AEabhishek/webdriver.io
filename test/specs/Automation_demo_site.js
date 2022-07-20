describe('open demo',async()=>{
    it('launch app',async()=>{
        await browser.url("http://demo.automationtesting.in/Register.html")
        await browser.maximizeWindow()
        await browser.$("//input[@placeholder='First Name']").setValue("ASHOK KUMAR")
        await browser.$("//input[@placeholder='Last Name']").setValue("RAMKI")
        await browser.$("//textarea[@ng-model='Adress']").setValue("VIJAYNAGAR,BANGALORE-560011")
        await browser.$("//input[@type='email']").setValue("aph7899@gmail.com")
        await browser.$("//input[@type='tel']").setValue("9234567890")
        await browser.$("//input[@id='checkbox2']").click();
        await browser.$("//div[@class='ui-autocomplete-multiselect ui-state-default ui-widget']").click();
        await browser.$("//a[.='Bulgarian']").click();
        await browser.$("//form[@id='basicBootstrapForm']").click();
        await browser.pause(2000);
        // await browser.$("//select[@class='form-control ng-valid ng-dirty ng-valid-parse ng-touched']").click()
        // await browser.pause(2000)
        // await browser.$("//select[.='Javascript']").click()
        await  browser.$("//span[@class='select2-selection select2-selection--single']").click()
        await browser.pause(2000);

        await  browser.$("//li[.='Australia']").click()
        await browser.$("//select[@ng-model='yearbox']").selectByVisibleText("1993")
        await browser.$("//select[@ng-model='monthbox']").selectByVisibleText("February")
        await browser.$("//select[@ng-model='daybox']").selectByVisibleText("25")
        await browser.pause(2000);

        await  browser.$("//input[@id='firstpassword']").setValue("asdfg@2567");
        await  browser.$("//input[@id='secondpassword']").setValue("asdfg@2567");
        await browser.pause(2000);

        await  browser.$("//input[@id='imagesrc']").setValue("C:/Users/Abhi Akshay/Desktop/938590-money-heist.jpg")
        await browser.pause(2000);

        await browser.$("//button[@id='submitbtn']").click()




        




    })

}
)