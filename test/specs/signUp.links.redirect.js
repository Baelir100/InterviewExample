const PageOpen = require('../pageobjects/page.open');
const SignUpPage = require('../pageobjects/signup.page');
const {expect} = require('chai');

const url = "https://telnyx.com/sign-up"

describe('LogIn: Links Redirect', () => {
    it('Links Redirect: Terms and Conditions', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.openTermsAndConditionsLink()
        await (expect(await SignUpPage.validateTermsAndConditionsUrl()).true)
    });
    it('Links Redirect: Privacy Policy', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.openPrivacyPolicyLink()
        await (expect(await SignUpPage.validatePrivacyPolicyUrl()).true)       
    });
    it('Links Redirect: Log in', async () => {
        await PageOpen.openUrl(url)
        await PageOpen.closeCookiesWarningModal()
        await SignUpPage.openLogInLink()
        await (expect(await SignUpPage.validateLogInUrl()).true)           
    });
});