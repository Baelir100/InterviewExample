const PageOpen = require('../pageobjects/page.open');
const LogInPage = require('../pageobjects/login.page');
const {expect} = require('chai');

const url = "https://portal.telnyx.com/#/login/sign-in"


describe('LogIn: Links Redirect', () => {
    it('Links Redirect: Password Reset', async () => {
        await PageOpen.openUrl(url)
        await LogInPage.openPasswordResetUrlLink()
        await (expect(await LogInPage.validatePasswordResetUrl()).true)
    });
    it('Links Redirect: Sign Up', async () => {
        await PageOpen.openUrl(url)
        await LogInPage.openSignUpLink()
        await (expect(await LogInPage.validateSignUpUrl()).true)       
    });
    it('Links Redirect: Resend Email', async () => {
        await PageOpen.openUrl(url)
        await LogInPage.openResendEmailLink()
        await (expect(await LogInPage.validateResendEmailUrl()).true)           
    });
});