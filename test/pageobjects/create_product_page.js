class product_page_creation{
     get product_link()
     {
        return $("//a[@href='index.php?module=Products&action=index']")
     }

     get create_product_icon(){
        return $("//img[@src='themes/softed/images/btnL3Add.gif']")
     }

     get product_text_field(){
        return $("//input[@name='productname']")
     }

     get product_category_drpdn(){
        return $("//select[@name='productcategory']")
     }
     get manuctature_type_drpdn(){
        return $("//select[@name='manufacturer']")
     }

     get unit_drpdn(){
        return $("//select[@name='usageunit']")
     }

     get uploadfile(){
        return $ ("//input[@id='my_file_element']")
     }


     get save_btn(){
      return   $("//input[@title='Save [Alt+S]']")
     }


     async create_product_with_given(product_name,product_catogory,manufacture_type,unit_type,productfilepath){
        await this.product_link.click()
        await this.create_product_icon.click()
        await this.product_text_field.setValue(product_name)
        await this.product_category_drpdn.selectByVisibleText(product_catogory)
        await this.manuctature_type_drpdn.selectByVisibleText(manufacture_type)
        await this.unit_drpdn.selectByVisibleText(unit_type)
        await this.uploadfile.setValue(productfilepath)
        await this.save_btn.click()


     }






}
module.exports = new product_page_creation()