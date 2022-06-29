class product_page{

    get product_icon_in_contact()
    {
        
       return $("//img[@src='themes/softed/images/select.gif']")
        
    }

    get save_btn(){
        return $("//input[@title='Save [Alt+S]']")
    }


    async product_page(){
        await this.product_icon_in_contact.click()
    }


    async save_button(){
        await this.save_btn.click()
    }
}

module.exports=new product_page()