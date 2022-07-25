const PageOpen = require('../pageobjects/page.open');
const LogInPage = require('../pageobjects/login.page');
const NetworkPage = require('../pageobjects/network.page');
const {expect} = require('chai');

const url = "https://portal.telnyx.com/#/login/sign-in"


describe('Home Page: Network Page', () => {
    it('Network Page: Create first Network', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail()
        await LogInPage.enterPassword()  
        await LogInPage.logInButtonClick()
        await NetworkPage.networkingPageButtonClick()
        await NetworkPage.createNetworkButtonClick()
        await NetworkPage.networkNameInput()
        await NetworkPage.modalCreateNetworkButtonClick()
        await expect(await NetworkPage.waitUntilFirstNetworkNameIsDisplayed()).true
    });
    it('Network Page: Delete Network', async () => {
        await browser.reloadSession()
        await PageOpen.openUrl(url)
        await LogInPage.enterEmail()
        await LogInPage.enterPassword()  
        await LogInPage.logInButtonClick()
        await NetworkPage.networkingPageButtonClick()
        await NetworkPage.deleteNetworkButtonClick()
        await NetworkPage.modalDeleteNetworkButtonClick()
        await expect(await NetworkPage.waitUntilStartingNetworkEmptyStateIsDisplayed()).true
    });
});