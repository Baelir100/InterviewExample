    const MainMethods = require('./main.methods');
    
    const networkingPageButton = '[id="main_content"] [href="/#/app/networking/networks"]'
    const createNetworkButton = '//*[@id="navView-content"]/div[3]/div/react-networks-new-route//div[2]/button[1]'
    const modalNetworkNameInput = '//aside//input'
    const firstNetworkName = '//tbody/tr[1]/td[1]'
    const modalCreateNetworkButton = '//aside//div[2]/form/div/div/div/button[2]'
    const deleteNetworkButton = '//tbody/tr[1]/td[4]//button[2]'
    const modalDeleteNetworkButton = '//aside//button[2]'
    const startingNetworkEmptyState = 'section>div>div>h2'
    
    class NetworkPage extends MainMethods {

    async networkingPageButtonClick () {
        await super.waitUntilClickable(networkingPageButton, 50000)
        return await super.click(networkingPageButton);
    }

    async  createNetworkButtonClick () {
        await super.waitUntilClickable(createNetworkButton, 50000)
        return await super.click(createNetworkButton);
    }
      
    async networkNameInput () {
        await super.addValue(modalNetworkNameInput, super.randomNumbers());
        return await super.getElementValue(modalNetworkNameInput)
    }

    async waitUntilFirstNetworkNameIsDisplayed () {
        await super.waitUntilDisplayed(firstNetworkName)
        return super.isElementDisplayed(firstNetworkName)
    }

    async waitUntilStartingNetworkEmptyStateIsDisplayed () {
        await super.waitUntilDisplayed(startingNetworkEmptyState)
        return super.isElementDisplayed(startingNetworkEmptyState)
    }

    async firstNetworkNameIsDisplayed () {
        return await super.isElementDisplayed(firstNetworkName)
    }

    async firstNetworkNameIsExisting () {
        await browser.pause(3000)
        return await super.isElementExisting(firstNetworkName)
    }
    
    async getFirstNetworkName () {
        return await super.getElementText(firstNetworkName)
    }
    
    async modalCreateNetworkButtonClick () {
        await super.waitUntilClickable(modalCreateNetworkButton, 50000)
        return await super.click(modalCreateNetworkButton);
    }
    
    async compareNetworksNames (element) {
        return await super.waitUntilEqualsText(element, super.getElementText(firstNetworkName) + "", 50000)
    }

    async  deleteNetworkButtonClick () {
        await super.waitUntilClickable(deleteNetworkButton, 50000)
        return await super.click(deleteNetworkButton);
    }

    async  modalDeleteNetworkButtonClick () {
        await super.waitUntilClickable(modalDeleteNetworkButton, 50000)
        return await super.click(modalDeleteNetworkButton);
    }
}

module.exports = new NetworkPage();