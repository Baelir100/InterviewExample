    const MainMethods = require('./main.methods');
    
    const homeUrl = 'https://portal.telnyx.com/#/app/home'
    const passwordResetUrl = 'https://portal.telnyx.com/#/login/password-reset'
    const signUpUrl = 'https://portal.telnyx.com/#/login/sign-in'
    const resendEmailUrl = 'https://portal.telnyx.com/#/login/resend-email'
    
    const logInButton = '[aria-label="loginForm"] [type="submit"]'
    const inputWorkEmail = '[name="email"]'
    const inputWorkEmailError = '//input[@name="email"]/../../div[2]'    
    // const inputWorkEmailError = '[name="login"]>form>div>div:first-child>label>div>div:nth-child(2)'
    const inputPassword = '[name="password"]'
    const inputPasswordError = '//input[@name="password"]/../../div[2]'
    // const inputPasswordError = '[name="login"]>form>div>div:nth-child(2)>label>div>div:nth-child(2)'
    const rememberMeCheckbox = 'form[aria-label="loginForm"] svg'
    const combinationIsNotWalidError = '[data-testid="login.signin.message"]'
    const passwordResetLink = 'a[href$="/password-reset"]'
    const signUpLink = 'a[href$="/sign-up"]'
    const resendEmailLink = 'a[href$="resend-email"]'
    
    class LogInPage extends MainMethods {
      
    async enterEmail (email = "baelir100@gmail.com") {
        return await super.addValue(inputWorkEmail, email);
    }
      
    async enterPassword (password = "!Baelir100000000") {
        return await super.addValue(inputPassword, password);
    }


    async checkRememberMeCheckbox () {
        super.scrollElementIntoViewTop(rememberMeCheckbox)
        return await super.click(rememberMeCheckbox);
    }

    async uncheckRememberMeCheckbox () {
        if (await super.getElementAttribute(rememberMeCheckbox, "aria-checked") === true) {
            super.scrollElementIntoViewTop(rememberMeCheckbox)
            return await super.click(rememberMeCheckbox);
        };
    }

    async inputWorkEmailIsFocused () {
        return await super.isElementFocused(inputWorkEmail)
    }

    async inputPasswordIsFocused () {
        return await super.isElementFocused(inputPassword)
    }
    
    
    async logInButtonClick () {
        await super.waitUntilClickable(logInButton, 50000)
        return await super.click(logInButton);
    }
    
    async validateHomeUrl () {        
        await super.waitUntilPageOpens(homeUrl, 50000)
        return (await browser.getUrl() == homeUrl)
    }

    async inputWorkEmailErrorDisplayed () {
        return await super.isElementDisplayed(inputWorkEmailError);
    }

    async inputPasswordErrorDisplayed () {
        return await super.isElementDisplayed(inputPasswordError);
    }

    async waitUntilCombinationIsNotWalidErrorDisplayed () {
        await super.waitUntilExists(combinationIsNotWalidError);
        return await super.isElementDisplayed(combinationIsNotWalidError);
    }

    async combinationIsNotWalidErrorDisplayed () {
        await browser.pause(3000)
        return await super.isElementDisplayed(combinationIsNotWalidError);
    }


    

    async openPasswordResetUrlLink () {
        await super.click(passwordResetLink);
        return await browser.switchWindow(passwordResetUrl);
    }

    async openSignUpLink () {
        await super.click(signUpLink);
        return await browser.switchWindow(signUpUrl);
    }

    async openResendEmailLink () {
        await super.click(resendEmailLink);
        return await browser.switchWindow(resendEmailUrl);
    }

    async validatePasswordResetUrl () {        
        await super.waitUntilPageOpens(passwordResetUrl, 30000)
        return (await browser.getUrl() == passwordResetUrl)
    }

    async validateSignUpUrl () {
        await super.waitUntilPageOpens(signUpUrl, 30000)
        return (await browser.getUrl() == signUpUrl);
    }

    async validateResendEmailUrl () {
        await super.waitUntilPageOpens(resendEmailUrl, 30000)
        return (await browser.getUrl() == resendEmailUrl);
    }
}

module.exports = new LogInPage();