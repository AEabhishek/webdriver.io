class document_page{
 
    get dococument_link() {
        return $("//a[@href='index.php?module=Documents&action=index']")

    } 

    get create_document_icon(){
       return $("//img[@src='themes/softed/images/btnL3Add.gif']")

    }

    get document_name() {
           return $("//input[@name='notes_title']")
    } 
    

    get frame_notes(){
         return $("//body[@class='cke_show_borders']")

    }


    get uploadFile(){
        return $ ("//input[@name='filename']")

    }
    get save_btn(){
        return $("//input[@name='filename']/../../../following-sibling::tr/following-sibling::tr/td/div/input[@title='Save [Alt+S]']")
    }


    async create_document(document_title){
        await this.dococument_link.click()
        await this.create_document_icon.click()
        await this.document_name.setValue(document_title)

    }



    async handle_frame(note){
       
        await this.frame_notes.setValue(note)
        await browser.keys(['Control','a'])
        await browser.keys(['Control','b']);
        await browser.keys(['Control','i']);
        await browser.keys(['Control','u']);


    }

   

    async upload_and_save(doc_filePath){
        await this.uploadFile.setValue(doc_filePath)

        await this.save_btn.click()
    }






   
   


}
module.exports=new document_page()
