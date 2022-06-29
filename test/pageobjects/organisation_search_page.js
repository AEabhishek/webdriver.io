class organisation_page{

   

    get srh_btn(){
        return $("//input[@name='search']")

    }  

    get srch_field() {
        return  $("//input[@id='search_txt']")

    }

    get select_element () {
       return $("//a[@id='1']")
    } 
    
    async organisation_window(search_text,){
        await this.srch_field.setValue(search_text) //aran
        await this.srh_btn.click()
        await (await this.select_element).click()
    }
}
module.exports =new organisation_page()