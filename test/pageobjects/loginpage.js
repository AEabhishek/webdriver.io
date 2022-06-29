
class loginpage{


    async open(path)
    {
        return browser.url(path)
    }


    get Username(){
        return $("//input[@name='user_name']")
    }

    get Password(){
        return $("//input[@name='user_password']")
    }


    get Btnsubmit()
    {
        return $("//input[@id='submitButton']")
    }
    
    async login(username,password)
    {
        await this.Username.setValue(username)
        await this.Password.setValue(password)
        await this.Btnsubmit.click()
    }
}
module.exports=new loginpage()