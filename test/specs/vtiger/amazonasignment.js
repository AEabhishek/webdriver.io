describe('amazon',async()=>{
    it('launch',async()=>{
        await browser.url('https://www.amazon.in/')
      await browser.maximizeWindow()
      var links =await browser.$$("//a")
      var arr1=[]
      for(i=0; i<links.lenght; i++)
      {
        var ele=await links[i].getText()
        arr[index]=ele
      }
      console.log(links.length);
      console.log(arr1.length);
      
     
      // for(i=0; i<arr1.lenght; i++)
      // {
      //   for(j=i+1; j<arr1.lenght; j++)
      //   {
      //    if(arr1[i]==arr1[j])
      //    {
      //     arr1.splice(j,1)
      //    }
      //   }
      // }
      // console.log(arr1.length);

    
  
      


      

    })

})