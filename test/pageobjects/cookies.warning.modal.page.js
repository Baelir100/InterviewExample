const MainMethods = require('./main.methods');

const modalBody = '//div[@id="__next"]/div[1]/div/div'
const modalHeader = ''
const modalInformation = ''
const acceptAndCloseButton = ''
const findOutMoreButton = ''
const closeButton = 'body>div>div>div>div>button>svg'

class CookiesWarningModal extends MainMethods {
    
async closeCookiesWarningModal () {
    if (await super.isElementDisplayed(modalBody)) {
    return await super.click(closeButton)
        }
    }
}

module.exports = new CookiesWarningModal();
