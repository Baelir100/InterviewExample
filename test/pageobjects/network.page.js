    const MainMethods = require('./main.methods');
    
    const networkingPageButton = '#main_content [href="/#/app/networking/networks"]'
    const createNetworkButton = '[data-testid="title-container"]~div button:first-child'
    const modalNetworkNameInput = 'aside input'
    const firstNetworkName = 'tbody tr:first-child td:first-child'
    const modalCreateNetworkButton = 'aside button:nth-child(2)'
    const deleteNetworkButton = 'tbody>tr>td>div>button:nth-child(2)'
    const modalDeleteNetworkButton = 'aside button:nth-child(2)'
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