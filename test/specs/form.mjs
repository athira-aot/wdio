import FormPage from '../pages/form-page.mjs';
import HomePage from '../pages/home-page.mjs';
import { faker } from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter'
describe("Form",()=>{
   
   before(async()=>{
  
    await HomePage.open();
    browser.maximizeWindow();
   //  await browser.pause(10000);
  })
  it('Enter username,password and click on login button',async()=>{
 
    await browser.pause(1000);
    await HomePage.login('john.honai','aot123');
    await browser.pause(1000);
  });

    it("click on search",async()=>{
        //open URL
      //  await FormPage.open();
        await FormPage.search("Automation_wdio");
      }); 
       it("fill all fields and click on submit",async()=>{
      // await FormPage.submitForm('athira','123','www.aot.com','(232) 131-3131','athira.s@gmail.com');
       await FormPage.submitForm(faker.name.findName(),faker.phone.number(),faker.internet.url(),faker.phone.number(),faker.internet.email());
      const success_msg=$("//div[@role='alert' or contains(@class, 'Toastify__toast-body')]");
    await expect(success_msg).toHaveTextContaining('Submission Saved.');
      });   

      //*[@id="bldelcm1q"]/div[1]
      //*[@id="9uhypw8zf"]/div[1]
    });
