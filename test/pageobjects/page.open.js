const MainMethods = require('./main.methods');

const modalBody = '//div[@id="__next"]/div[1]/div/div'
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
