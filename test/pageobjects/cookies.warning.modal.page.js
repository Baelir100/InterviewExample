const MainMethods = require('./main.methods');

const modalBody = '#__next>div:first-child>div>div'
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
