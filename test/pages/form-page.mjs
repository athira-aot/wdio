class FormPage{
    open(){
        return browser.url('/');
        }
        get searchText1(){
            return $('#form1');
        }
      get clickSearch(){
        return $('//*[@id="main"]/div/section/div[1]/div/div/button[2]/i');
      }
        get textField(){
            return $('//*[@id="e2xuh5i-textField"]');
            
        }
        get number(){
            return $('//*[@id="ejs6er-number"]');
            
        }
        get url(){
            return $('//*[@id="eh8uzl-url"]');
            
        }
        get phoneNumber(){
            return $('//*[@id="e9plqt-phoneNumber"]');
            
        }
        get email(){
            return $('//*[@id="ep08bzu-email"]');
            
        }
        get btnSubmit(){
            return $('//*[@id="er86dfm"]/button');
            
        }
        get btnSubmitNew(){
            return $('//*[@id="main"]/div/section/div[2]/div/div[1]/div/table/tbody/tr/td[2]/span/button[1]');
            
        }
       
        
       async search(searchText){
       
        await this.searchText1.setValue('automation_wdio');
        await this.clickSearch.click();
        await browser.pause(1000);
        await this.btnSubmitNew.click();
        
       } 
        
       async submitForm(text,number,url,phone,email){
        await this.textField.setValue(text);
        await this.number.setValue(number);
        await this.url.setValue(url);
        await this.phoneNumber.setValue(phone);
        await this.email.setValue(email);
        await this.btnSubmit.click();
     //   await browser.pause(3000);
       // console.log("clicked");
       }   
    }
    export default new FormPage();