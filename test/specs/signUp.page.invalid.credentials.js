const PageOpen = require('../pageobjects/page.open');
const SignUpPage = require('../pageobjects/signup.page');
const {expect} = require('chai');

const url = "https://telnyx.com/sign-up"

const email = "email@il.com"
const emailInvalid = "com"
const name = "name"
const password = "password123"
const promo = "random123promo"
const passwordLong = "passwordpasswordpassword"
const passwordWithNumbers = "p12345"
const passwordWithSymbols = "!!!pass"
const passwordWithUpperCase = "Password"

before('Open the login page',async () => {
    await PageOpen.openUrl(url)
    await PageOpen.closeCookiesWarningModal()
  });
describe('Invalid Credentials: Empty fields', () => {
    it('Empty fields: Empty credentials', async () => {
        await SignUpPage.createAccountButtonClick()   
        await (expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true)
        await (expect(await SignUpPage.inputFullNameErrorDisplayed()).true)
    });

    it('Empty fields: Email only', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterEmail(email)
        await SignUpPage.createAccountButtonClick()
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).false
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
    });

    it('Empty fields: Name only', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterName(name)
        await SignUpPage.createAccountButtonClick()   
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).false
    });

    it('Empty fields: Password only', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterPassword(password)
        await SignUpPage.createAccountButtonClick()   
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
        await expect(await SignUpPage.inputPasswordRequirementsDisplayed()).true
    });
});
describe('Invalid Credentials: Invalid Values', () => {
    it('Invalid Values: Invalid Work Email', async () => {  
        await SignUpPage.clearAll() 
        await SignUpPage.enterEmail(emailInvalid) 
        await SignUpPage.createAccountButtonClick() 
        await expect(await SignUpPage.inputWorkEmailInvalidErrorText()).true
    });
});
describe('Invalid Credentials: Password Requirements', () => {
    it('Password Requirements: Be at least 12 characters long', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterPassword(passwordLong)
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeLong()).to.include('true')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithNumbers()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithSymbols()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithUpperCase()).to.include('false')
    });
    it('Password Requirements: Contain at least one number', async () => {
        await SignUpPage.clearAll()  
        await SignUpPage.enterPassword(passwordWithNumbers)  
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeLong()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithNumbers()).to.include('true')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithSymbols()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithUpperCase()).to.include('false')
    });
    it('Password Requirements: Contain at least one symbol', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterPassword(passwordWithSymbols)  
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeLong()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithNumbers()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithSymbols()).to.include('true')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithUpperCase()).to.include('false')
    });
    it('Password Requirements: Contain at least one upper-case letter', async () => {
        await SignUpPage.clearAll() 
        await SignUpPage.enterPassword(passwordWithUpperCase) 
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeLong()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithNumbers()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithSymbols()).to.include('false')
        await expect(await SignUpPage.inputPasswordRequirementsElementAttributeWithUpperCase()).to.include('true')
    });
});
describe('SignUp page: Promo Code', () => {
    it('Promo Code: Expand', async () => {        
        await SignUpPage.clearAll() 
        await expect(await SignUpPage.promoLinkExpand()).true
    });
    it('Promo Code: Promo Code Only', async () => { 
        await SignUpPage.clearAll()      
        await expect(await SignUpPage.enterPromo(promo)).true
        await SignUpPage.createAccountButtonClick()   
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
    });
});
describe('SignUp page: Checkboxes', () => {
    it('Checkbox: Terms And Conditions Checkbox Uncheked Error', async () => {         
        await SignUpPage.clearAll()      
        await SignUpPage.checkTermsAndConditionsCheckbox()  
        await SignUpPage.uncheckTermsAndConditionsCheckbox() 
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
        await expect(await SignUpPage.termsAndConditionsCheckboxErrorDisplayed()).true
    });
    it('Checkbox: Terms And Conditions Checkbox Only', async () => {          
        await SignUpPage.clearAll()     
        await SignUpPage.checkTermsAndConditionsCheckbox()  
        await SignUpPage.createAccountButtonClick()   
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
        await expect(await SignUpPage.termsAndConditionsCheckboxErrorDisplayed()).false
        await SignUpPage.uncheckTermsAndConditionsCheckbox() 
    });
    it('Checkbox: Recieve Emails Checkbox Only', async () => {            
        await SignUpPage.clearAll()   
        await SignUpPage.checkRecieveEmailsCheckbox()  
        await SignUpPage.uncheckRecieveEmailsCheckbox() 
        await SignUpPage.createAccountButtonClick()   
        await expect(await SignUpPage.inputWorkEmailErrorDisplayed()).true
        await expect(await SignUpPage.inputFullNameErrorDisplayed()).true
        await expect(await SignUpPage.termsAndConditionsCheckboxErrorDisplayed()).true
    });
});
