const PageOpen = require('../pageobjects/page.open');
const LogInPage = require('../pageobjects/login.page');
const {expect} = require('chai');

const url = "https://portal.telnyx.com/#/login/sign-in"

const email = "Bohdansoloviy@gmail.com"
const password = "!Password123"

xdescribe('Log In: Valid Credentials', () => {
    it('Valid Credential: Without "Remember my email address" checkbox', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(email)
        await LogInPage.enterPassword(password)  
        await LogInPage.logInButtonClick()
        await expect(await LogInPage.validateHomeUrl()).true
//        await (expect(await LogInPage.combinationIsNotWalidErrorDisplayed()).true)
    });
    it('Valid Credential: With "Remember my email address" checkbox', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail(email)
        await LogInPage.enterPassword(password)  
        await LogInPage.checkRememberMeCheckbox() 
        await LogInPage.logInButtonClick()
        await expect(await LogInPage.validateHomeUrl()).true
//        await (expect(await LogInPage.combinationIsNotWalidErrorDisplayed()).true)
    });
});