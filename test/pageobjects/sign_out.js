class sign_out_page{

    get mousehovertosignouticon(){
        return $("//img[@src='themes/softed/images/user.PNG']")
    }

    get sign_out_button(){
        return $("//a[@href='index.php?module=Users&action=Logout']")
    }

    async sign_out(){
        await this.mousehovertosignouticon.moveTo()
        await this.sign_out_button.click()
    }






}

module.exports=new sign_out_page()