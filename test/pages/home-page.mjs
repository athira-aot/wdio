class HomePage{
open(){
return browser.url('https://app2.aot-technologies.com/');
}
get username(){
    return $('#username');
    
}
get password(){
    return $('#password');
    
}
get signin(){
    return $('#kc-login');
}
get forms(){
    return $('a[href*="/form"]'); 
}
async login(username1,password1){
        
    await this.username.setValue(username1);
    
    await this.password.setValue(password1);
    await this.signin.click();
    await browser.pause(1000);
    await this.forms.click();
   }

}
export default new HomePage();