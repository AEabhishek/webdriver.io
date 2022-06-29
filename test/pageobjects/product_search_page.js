class product_search{

    get search(){
        return $("//input[@name='search_text']")
    }

    get search_btn(){
        return $("//input[@name='search']")
    }


    get first_element()
    {
        return $("//a[@id='1']")
    }


    async product_window(search_product,){
        await this.search.setValue(search_product)//hammam
         await this.search_btn.click()
         await this.first_element.click()

    }



}
module.exports=new product_search()