const PageOpen = require('../pageobjects/page.open');
const LogInPage = require('../pageobjects/login.page');
const {expect} = require('chai');

const url = "https://portal.telnyx.com/#/login/sign-in"

const email = "Bohdansoloviy@gmail.com"
const emailInvalid = "Bohdan@gmail.com"
const nonEmail = "Bohdan"
const password = "!Password123"
const passwordInvalid = "=)"

describe('Log In: Empty fields', () => {
    it('Empty fields: Empty Credentials', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailIsFocused()).false)
    });
    it('Empty fields: Without password', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(email)
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputPasswordIsFocused()).false)
    });
    it('Empty fields: Without email', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterPassword(password) 
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailIsFocused()).false)
    });
});
describe('Log In: Invalid Values', () => {
    it('Invalid Values: Invalid non Email value', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(nonEmail)
        await LogInPage.enterPassword(password) 
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailErrorDisplayed()).false)
        await (expect(await LogInPage.inputPasswordErrorDisplayed()).false)
        await (expect(await LogInPage.combinationIsNotWalidErrorDisplayed()).false)
    });
    it('Invalid Values: Invalid non exist Email', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(emailInvalid)
        await LogInPage.enterPassword(password) 
        await LogInPage.logInButtonClick()   
        await (expect(await LogInPage.inputWorkEmailErrorDisplayed()).false)
        await (expect(await LogInPage.inputPasswordErrorDisplayed()).false)
        await (expect(await LogInPage.waitUntilCombinationIsNotWalidErrorDisplayed()).true)
    });
    it('Invalid Values: Invalid non exist Password', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(email)
        await LogInPage.enterPassword(passwordInvalid) 
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailErrorDisplayed()).false)
        await (expect(await LogInPage.inputPasswordErrorDisplayed()).false)
        await (expect(await LogInPage.waitUntilCombinationIsNotWalidErrorDisplayed()).true)
    });
    it('Invalid Values: Invalid non exist Email and non exist Password', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(emailInvalid)
        await LogInPage.enterPassword(passwordInvalid) 
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailErrorDisplayed()).false)
        await (expect(await LogInPage.inputPasswordErrorDisplayed()).false)
        await (expect(await LogInPage.waitUntilCombinationIsNotWalidErrorDisplayed()).false)
    });
    it('Invalid Values: Invalid non Email value and Invalid non exist Password', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(nonEmail)
        await LogInPage.enterPassword(passwordInvalid) 
        await LogInPage.logInButtonClick()        
        await (expect(await LogInPage.inputWorkEmailErrorDisplayed()).true)
        await (expect(await LogInPage.inputPasswordErrorDisplayed()).false)
        await (expect(await LogInPage.combinationIsNotWalidErrorDisplayed()).false)
        });
    });