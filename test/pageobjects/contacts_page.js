class create_contact_Page{

    get contacts_link(){
        return $("//a[@href='index.php?module=Contacts&action=index']")

    }
    get Create_contact_icon(){
        return $("//img[@src='themes/softed/images/btnL3Add.gif']")
    }

    get fname_drpdn(){
        return $("//select[@name='salutationtype']")
    }

    get ld_src(){

        return $("//select[@name='leadsource']")
    }
    get lname_txt(){
        return $("//input[@name='lastname']")

    }
        
    get scroll() {
        return $("//input[@name='imagename']")


   }
   get upload(){
   return  $("//input[@name='imagename']")
   }

   get save(){
    return $("//input[@class='crmButton small save']")
   }

   get org_icn() {
    return $("//input[@name='account_name']//..//img")
}  

   async Create_contact(fname_extension,lead_src,last_name){
      await this.contacts_link.click()
      await this.Create_contact_icon.click()
      await this.fname_drpdn.selectByVisibleText(fname_extension)//Prof.
      await this.ld_src.selectByVisibleText(lead_src)//Employee
      await this.lname_txt.setValue(last_name)//suresh
      await (await this.org_icn).click()

   }
  

   async contacts_scroll(path){

    await this.scroll.scrollIntoView()
    await this.upload.setValue(path)
    await this.save.click()


   }


   





}
module.exports =new create_contact_Page()