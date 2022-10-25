//Sign in to forms-flow-mahagony
import HomePage from '../pages/home-page.mjs';
import allureReporter from '@wdio/allure-reporter'
//const path=require('path');

describe('Home',()=>{

     before(async()=>{
         await HomePage.open();
        // await browser.setTimeout({ 'pageLoad': 10000 })
        
     })
    //it('open URL & assertTitle',async()=>{
        //open URL
        
       
   // });
    it('Enter username,password and click on login button',async()=>{
        //open URL
      //  await HomePage.open();
        await browser.pause(100);
        allureReporter.addFeature("login");
        await HomePage.login('john.honai','aot123');
        
        //const login = await browser.$('#login');
    //     HomePage.username.setValue('john.honai') 
    //     await browser.pause(100);

    //    await HomePage.password.setValue('aot123') 
    //     await browser.pause(100);

      
    //     await HomePage.login.click();
    //     await browser.pause(1000);
        });
       
it('should click on forms', async () => {
        
            
    await HomePage.forms.click();
    await browser.pause(1000);
    
        });
        // it('simple upload Test',async()=>{
        //     //store file path
        //     console.log(__dirname);
        //     const filepath=path.join(__dirname,'../data/Freedom of Information and Protection of Privacy-2022-09-30T11_38_07.575Z.json')
        //     const remoteFilePath=browser.uploadFile(filepath);
        //     const upload="//button[@class='btn btn-primary btn-sm form-btn pull-right btn-left btn btn-primary']";
        //     await $ (upload).click();
        //     await browser.pause(1000);
        //     await browser.switchTo();
        //     await browser.activeElement.addValue("C:\selenium learning\wdio-course\test\data\Freedom of Information and Protection of Privacy-2022-09-30T11_38_07.575Z.json");
        // });
        
    })
