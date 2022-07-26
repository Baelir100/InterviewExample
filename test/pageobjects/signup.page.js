    const MainMethods = require('./main.methods');
    
    const errorMessageTextEmpty = "This field is required."
    const errorMessageTextNotValidEmail = "Please enter a valid email address."
    const termsAndConditionsUrl = 'https://telnyx.com/terms-and-conditions-of-service'
    const privacyPolicyUrl = 'https://telnyx.com/privacy-policy'
    const logInUrl = 'https://portal.telnyx.com/#/login/sign-in'
    
    const createAccountButton = '[type="submit"]'
    const inputWorkEmail = '#email'
    const inputWorkEmailError = '#email_error'
    const inputFullName = '#full_name'
    const inputFullNameError = '#full_name_error'
    const inputPassword = '#password'
    const passwordRequirements = "#password_requirements"
    const passwordRequirementsLong = '#password_requirements >div:nth-child(2)'
    const passwordRequirementsWithNumbers = '#password_requirements >div:nth-child(3)'
    const passwordRequirementsWithSymbols = '#password_requirements >div:nth-child(4)'
    const passwordRequirementsWithUpperCase = '#password_requirements >div:nth-child(5)'
    const inputPromo = '#promo_code'
    const promoCodeLink = '[aria-label="signup-form"] [type="button"]'
    const termsAndConditionsCheckbox = 'div[aria-labelledby="terms-label"]'
    const termsAndConditionsCheckboxChecked = 'path[fill-rule="evenodd"]'
    const termsAndConditionsCheckboxError = "#terms_and_conditions_error"
    const recieveEmailsCheckbox = '//form[@aria-label="signup-form"]/div[3]/div[2]//label'
    const termsAndConditionsLink = 'span a[href="/terms-and-conditions-of-service"]'
    const privacyPolicyLink = 'span a[href="/privacy-policy"]'
    const logInLink = 'span a[href="https://portal.telnyx.com/#"]'
    const captchaError = '#signup-form_error'

    class SignUpPage extends MainMethods {

    async closeCookiesWarningModal () {
        if (await super.isElementDisplayed(modalBody)) {
        return await super.click(closeButton)
        }
    }
      
    async enterEmail (email) {
        return await super.addValue(inputWorkEmail, email);
    }
      
    async enterName (name) {
        return await super.addValue(inputFullName, name);
    }

    async enterPassword (password) {
        return await super.addValue(inputPassword, password);
    }



    async checkTermsAndConditionsCheckbox () {
        super.scrollElementIntoViewTop(termsAndConditionsCheckbox)
        return await super.click(termsAndConditionsCheckbox);
    }

    async uncheckTermsAndConditionsCheckbox () {
        if (await super.isElementExisting(termsAndConditionsCheckboxChecked)) {
            super.scrollElementIntoViewTop(termsAndConditionsCheckbox)
            return await super.click(termsAndConditionsCheckbox);
        };
    }

    async checkRecieveEmailsCheckbox () {
        super.scrollElementIntoViewTop(recieveEmailsCheckbox)
        return await super.click(recieveEmailsCheckbox);
    }

    async uncheckRecieveEmailsCheckbox () {
        if (await super.getElementAttribute(recieveEmailsCheckbox, "aria-checked") === true) {
            super.scrollElementIntoViewTop(recieveEmailsCheckbox)
            return await super.click(recieveEmailsCheckbox);
        };
    }
    


    async createAccountButtonClick () {
        return await super.click(createAccountButton);
    }


    async inputErrorDisplayed () {
        return await super.isElementDisplayed(inputFullNameError);
    }

    async inputWorkEmailErrorText () {
        return await super.getElementText(inputWorkEmailError) == errorMessageTextEmpty;
    }

    async inputWorkEmailInvalidErrorText () {
        return await super.getElementText(inputWorkEmailError) == errorMessageTextNotValidEmail;
    }

    async inputWorkEmailErrorDisplayed () {
        return await super.isElementDisplayed(inputWorkEmailError);
    }

    async inputFullNameErrorText () {
        return await super.getElementText(inputFullNameError) == errorMessageTextEmpty;
    }

    async inputFullNameErrorDisplayed () {
        return await super.isElementDisplayed(inputFullNameError);
    }

    async inputPasswordRequirementsDisplayed () {
        return await super.isElementDisplayed(passwordRequirements);
    }

    async termsAndConditionsCheckboxErrorDisplayed () {
        return await super.isElementDisplayed(termsAndConditionsCheckboxError);
    }
        
    async captchaErrorDisplayed () {
        await super.waitUntilDisplayed(captchaError, 30000);
        return super.isElementDisplayed(captchaError);
    }
    

    async inputPasswordRequirementsElementAttributeLong () {
        return await super.getElementAttribute(passwordRequirementsLong, "aria-hidden");
    }
    async inputPasswordRequirementsElementAttributeWithNumbers () {
        return await super.getElementAttribute(passwordRequirementsWithNumbers, "aria-hidden");
    }
    async inputPasswordRequirementsElementAttributeWithSymbols () {
        return await super.getElementAttribute(passwordRequirementsWithSymbols, "aria-hidden");
    }
    async inputPasswordRequirementsElementAttributeWithUpperCase () {
        return await super.getElementAttribute(passwordRequirementsWithUpperCase, "aria-hidden");
    }


    async clearAll () {
        await super.clearInputValueByControlA(inputWorkEmail);
        await super.clearInputValueByControlA(inputFullName);
        await super.clearInputValueByControlA(inputPassword);
        if (await super.isElementDisplayed(inputPromo)) {            
            await super.clearInputValueByControlA(inputPromo);
        };    
    }
    
    async clearEmail () {
        return await super.clearInputValueByControlA(inputWorkEmail);
    }

    async clearName () {
        return await super.clearInputValueByControlA(inputFullName);
    }

    async clearPassword () {
        return await super.clearInputValueByControlA(inputPassword);
    }

    async promoLinkExpand (inputPromoIsDisplayed = inputPromo) {
        await super.click(promoCodeLink);
        return await super.isElementDisplayed(inputPromoIsDisplayed);    
    }

    async enterPromo (promo) {
        await super.addValue(inputPromo, promo);
        return await super.getElementValue(inputPromo) == promo
    }

    async openTermsAndConditionsLink () {
        await super.click(termsAndConditionsLink);
        return await browser.switchWindow(termsAndConditionsUrl);
    }

    async openPrivacyPolicyLink () {
        await super.click(privacyPolicyLink);
        return await browser.switchWindow(privacyPolicyUrl);
    }

    async openLogInLink () {
        await super.click(logInLink);
        return await browser.switchWindow(logInUrl);
    }

    async validateTermsAndConditionsUrl () {        
        await super.waitUntilPageOpens(termsAndConditionsUrl, 30000)
        return (await browser.getUrl() == termsAndConditionsUrl)
    }

    async validatePrivacyPolicyUrl () {
        await super.waitUntilPageOpens(privacyPolicyUrl, 30000)
        return (await browser.getUrl() == privacyPolicyUrl);
    }

    async validateLogInUrl () {
        await super.waitUntilPageOpens(logInUrl, 30000)
        return (await browser.getUrl() == logInUrl);
    }

}

module.exports = new SignUpPage();