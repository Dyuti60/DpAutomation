const {expect} = require('@playwright/test')
const constants = require('../constant/constant.json')
const locators = require('../locator/locators.json')
// content -> Validate textcontent
// Element -> Validate Presence
// 
exports.LoginPageAssertion=class LoginPageAssertion{
    constructor(page){
        this.page=page
        this.loginPageAssertionConstants=constants.Assertion[0].loginPageAssertion
        this.loginPageLocators=locators.loginPageLocators
    }

    async assertLoginPageTitle(){
        await this.page.waitForSelector(this.loginPageLocators.registerNowButtonContent, { state: 'visible' })
        await expect(this.page).toHaveTitle(this.loginPageAssertionConstants.actualTitleContent)
    }
    async assertLoginPageHeading(){
        await expect(this.page.locator(this.loginPageLocators.loginPageHeadingContent)).toHaveText(this.loginPageAssertionConstants.actualLoginPageHeadingContent)
    }
    async assertLoginPageElementsAreDisplayed(){
        await expect(this.page.locator(this.loginPageLocators.usernameElement)).toBeVisible()
        await expect(this.page.locator(this.loginPageLocators.passwordElement)).toBeVisible()
        await expect(this.page.locator(this.loginPageLocators.loginBtnElement)).toBeVisible()
    }
    async assertLoginPageContents(){
        expect(await this.page.locator(this.loginPageLocators.emailFieldWebLabelElement)).toBeVisible()
        expect(await this.page.locator(this.loginPageLocators.passwordFieldWebLabelElement)).toBeVisible()
        expect(await this.page.locator(this.loginPageLocators.forgetButtonContent).textContent()).toContain(this.loginPageAssertionConstants.actualforgetButtonContent)
        expect(await this.page.locator(this.loginPageLocators.registrationDoneLinkContent).textContent()).toContain(this.loginPageAssertionConstants.actualRegistrationDoneLinkContent)
        expect(await this.page.locator(this.loginPageLocators.registerNowButtonContent).textContent()).toContain(this.loginPageAssertionConstants.actualRegisterNowButtonContent)
        expect(await this.page.locator(this.loginPageLocators.policyContent).textContent()).toContain(this.loginPageAssertionConstants.actualPolicyContent)
    }
    async loginPageAllAssertions(){
        await this.assertLoginPageTitle()
        await this.assertLoginPageHeading()
        await this.assertLoginPageElementsAreDisplayed()
        await this.assertLoginPageContents()
    }

    async isLoggedInAssertion(){
        await this.page.locator(this.loginPageLocators.logOutElement).isVisible()
    }
}
