
const locators = require('../locator/locators.json')
const registrationDataset = require('../testdata/datasetQA.json')
import {RegistrationPageAssertion} from '../assertion/RegistrationPageAssertion'
import {WebInteraction} from '../hooks/WebInteraction'
exports.RegistrationPage = class RegistrationPage{
    constructor(page){
        this.page=page
        this.webInteraction = new WebInteraction(page)
        this.RegistrationPageAssertion = new RegistrationPageAssertion(page)
        this.registrationPageLocators = locators.registrationPageLocators
        this.registrationData = registrationDataset.Registration[0]
    }

    async navigateToRegistrationPage(){
        await this.webInteraction.clickOnElement(this.registrationPageLocators.registerNowButtonElement)
        await this.page.waitForLoadState('load')
    }
    async validateRegistrationPage(){
        await this.page.waitForLoadState('load')
        await this.page.locator(this.registrationPageLocators.signUpBtn).isVisible()
        await this.RegistrationPageAssertion.assertAllRegistrationPageElementsAreDisplayed()

    }
    async enterUserRegistrationDetails(){
        await this.webInteraction.typeText(this.registrationPageLocators.firstNameElement,this.registrationData.firstName)
        await this.webInteraction.typeText(this.registrationPageLocators.lastNameElement,this.registrationData.lastName)
        await this.webInteraction.typeText(this.registrationPageLocators.contactNumberElement,this.registrationData.contactNumber)
        await this.webInteraction.typeText(this.registrationPageLocators.emailAddressElement,this.registrationData.email)
        await this.webInteraction.typeText(this.registrationPageLocators.passwordElement,this.registrationData.password)
        await this.webInteraction.typeText(this.registrationPageLocators.passwordConfirmationElement,this.registrationData.confirmPassword)
        await this.webInteraction.typeText(this.registrationPageLocators.addressElement,this.registrationData.address)
        await this.webInteraction.typeText(this.registrationPageLocators.pincodeElement,this.registrationData.pincode)
    }

    async submitRegistrationForm(){
        await this.webInteraction.clickOnElement(this.registrationPageLocators.signUpBtn)
    }


}