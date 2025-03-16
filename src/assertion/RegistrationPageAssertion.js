const {expect} = require('@playwright/test')
const constants = require('../constant/constant.json')
const locators = require('../locator/locators.json')
// content -> Validate textcontent
// Element -> Validate Presence
// 
exports.RegistrationPageAssertion=class RegistrationPageAssertion{
    constructor(page){
        this.page=page
        this.registrationPageAssertionConstants=constants.Assertion[2].registerPageAssertion
        this.registrationPageLocators=locators.registrationPageLocators
    }

    async assertRegistrationPageHeading(){
        await expect(await this.page.locator(this.registrationPageLocators.registerPageTitleElement)).toBeVisible()
    }

    async assertAlreadyRegisteredText(){
        expect(await this.page.locator(this.registrationPageLocators.alreadyRegistertedWebLabelElement).textContent())
        .toContain(this.registrationPageAssertionConstants.actualAlreadyRegistertedWebLabelContent)
    }

    async assertAllRegistrationPageElementsAreDisplayed(){
        await this.assertRegistrationPageHeading()
        await expect(await this.page.locator(this.registrationPageLocators.firstNameWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.lastNameWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.contactNumberWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.emailAddressWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.passwordWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.passwordConfirmationWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.addressWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.pincodeWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.stateWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.districtWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.roleTypeWebLabelElement)).toBeVisible()
        await expect(await this.page.locator(this.registrationPageLocators.loginNowLinkElement)).toBeVisible()
        await this.assertAlreadyRegisteredText()

    }
}