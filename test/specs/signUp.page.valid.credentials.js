const PageOpen = require('../pageobjects/page.open');
const SignUpPage = require('../pageobjects/signup.page');
const {expect} = require('chai');

const url = "https://telnyx.com/sign-up"

const email = "Bohdansoloviy@gmail.com"
const name = "Bohdan Solovii"
const password = "!Password123"
const promo = "promo359"

describe('Sign In: Minimal Conditions', () => {
    it('Sign In: Valid Conditions', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.enterEmail(email)
        await SignUpPage.enterName(name)
        await SignUpPage.enterPassword(password) 
        await SignUpPage.checkTermsAndConditionsCheckbox()  
        await SignUpPage.createAccountButtonClick()
        await expect(await SignUpPage.captchaErrorDisplayed()).true
    });
    it('Sign In: Valid Conditions + Promo Code', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.enterEmail(email)
        await SignUpPage.enterName(name)
        await SignUpPage.enterPassword(password) 
        await SignUpPage.promoLinkExpand()   
        await SignUpPage.enterPromo(promo)  
        await SignUpPage.checkTermsAndConditionsCheckbox()  
        await SignUpPage.createAccountButtonClick()
        await expect(await SignUpPage.captchaErrorDisplayed()).true
    });
    it('Sign In: Valid Conditions + Receive Emails Checkbox', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.enterEmail(email)
        await SignUpPage.enterName(name)
        await SignUpPage.enterPassword(password)           
        await SignUpPage.checkTermsAndConditionsCheckbox()     
        await SignUpPage.checkRecieveEmailsCheckbox()    
        await SignUpPage.createAccountButtonClick()
        await expect(await SignUpPage.captchaErrorDisplayed()).true
    });
    it('Sign In: Valid Conditions + Promo Code + Receive Emails Checkbox', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.enterEmail(email)
        await SignUpPage.enterName(name)
        await SignUpPage.enterPassword(password)         
        await SignUpPage.promoLinkExpand()   
        await SignUpPage.enterPromo(promo)     
        await SignUpPage.checkTermsAndConditionsCheckbox()      
        await SignUpPage.checkRecieveEmailsCheckbox()  
        await SignUpPage.createAccountButtonClick()
        await expect(await SignUpPage.captchaErrorDisplayed()).true
    });
});