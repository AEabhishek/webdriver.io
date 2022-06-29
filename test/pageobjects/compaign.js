

class compaignpage{


    get more_mouse_hover(){
        return $("//img[@src='themes/softed/images/menuDnArrow.gif']")

    }

    get compaign_link()
    {
        return $("//a[@name='Campaigns']")
    }

    get Create_compaign_icon(){
        return $("//img[@src='themes/softed/images/btnL3Add.gif']")
    }

    get Create_compaign_textfield()
    {
        return $("//input[@name='campaignname']")
    }

    get compaign_type_drop_down(){
        return $("//select[@name='campaigntype']")
    }

    get compaign_status_drpdn(){
        return $("//select[@name='campaignstatus']")
    }
    get expt_res_drpdn()
    {
        return $("//select[@name='expectedresponse']")
    }
    async compaign(compaign_name,compaign_type,compaign_status,expt_res){
        await this.more_mouse_hover.moveTo()
        await this.compaign_link.click()
        await this.Create_compaign_icon.click()
        await this.Create_compaign_textfield.setValue(compaign_name)
        // await this.compaign_type_drop_down.selectByVisibleText(compaign_type)//Public Relations
        await this.compaign_type_drop_down.selectByVisibleText(compaign_type)
        await this.compaign_status_drpdn.selectByVisibleText(compaign_status)//Planning
        await this.expt_res_drpdn.selectByVisibleText(expt_res)//Excellent

    }


    



}
module.exports = new compaignpage();
