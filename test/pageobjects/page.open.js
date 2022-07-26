const MainMethods = require('./main.methods');

const modalBody = '#__next>div:first-child>div>div'
const closeButton = 'body>div>div>div>div>button>svg'

class PageOpen extends MainMethods {
    async openUrl (url) {
        return await super.openPage(url)
    }
    async closeCookiesWarningModal () {
        if (await super.isElementDisplayed(modalBody)) {
        return await super.click(closeButton)
            }
    }
}
module.exports = new PageOpen();
