const constants = require('../constant/constant.json')
const testData = require('../testdata/datasetQA.json')
const locators = require('../locator/locators.json')
import {WebInteraction} from '../hooks/WebInteraction'
exports.UpdatePage = class UpdatePage{
    constructor(page){
        this.page=page
        this.utility = new WebInteraction(this.page)
        this.updatePageConstants = constants.Constants
        this.updatePageLocators = locators.updatePageLocators
        this.updateSerialNumberTestData = testData.Update[0]
        this.updatePersonalInformationTestData = testData.Update[1]
        this.updateInitiationInformationTestData = testData.Update[2]
        this.updateAddressInformationTestData = testData.Update[3]
        this.updateSummaryTestData = testData.Update[4]
    }
    
    async clickUpdateFromNavigationMenu(){
        await this.utility.clickOnElement(this.updatePageLocators.updateButtonFromNavigationMenuElement)
    }

    async enterSerialNumber(){
        await this.utility.typeText(this.updatePageLocators.inputSerialNumberElement,this.updateSerialNumberTestData.serialNumber)
    }
    async validateUpdateInitialPage(){
        //pending
    }

    async clickSearchButton(){
        await this.utility.clickOnElement(this.updatePageLocators.searchSerialNumberElement)
    }

    async clearSerialNumberEntered(){
        await this.utility.clickOnElement(this.updatePageLocators.clearSerialNumberElement)
    }

    async validateMemberDetailsSearched(){
        //pending
    }

    async navigateToPersonalInformationPage(){
        await this.utility.clickOnElement(this.updatePageLocators.updateButtonElement)
    }

    async validatePersonalInformationPage(){
        //pending
    }

    async enterPersonalInformationAndNavigate(){
        await this.utility.typeText(this.updatePageLocators.suggestedMemberNameElement,this.updatePersonalInformationTestData.suggestedMemberName)
        await this.utility.typeText(this.updatePageLocators.suggestedGuardianNameElement,this.updatePersonalInformationTestData.suggestedGuardianName)
        const ritwikName = this.updatePersonalInformationTestData.suggestedRitwikName.toUpperCase()
        await this.utility.typeText(this.updatePageLocators.suggestedRitwikNameElement,ritwikName)
        await this.utility.clickOptionByText(ritwikName)
        await this.page.waitForTimeout(3000)
        await this.utility.clickOnElement(this.updatePageLocators.clickNextButtonElement)
    }

    async validateInitiationInformationPage(){
        //pending
    }

    async enterInitiationInformationAndNavigate(){
        await this.utility.clickOnElement(this.updatePageLocators.clickDikhyatriStatusOption)
        await this.utility.clickOnElement(this.updatePageLocators.selectDikhyatriStatusOption) //
        await this.utility.typeText(this.updatePageLocators.enterFamilyCodeElement,this.updateInitiationInformationTestData.familyCode)
        //await this.utility.clickOnFirstElement(this.updatePageLocators.clickEamilyMemberNameElement)
        await this.utility.clickFirstOptionByText(this.updateInitiationInformationTestData.familyCodeMemberName)
        await this.utility.clickOnElement(this.updatePageLocators.mismatchFamilyMemberNamePopupContinueElement)
        await this.utility.typeText(this.updatePageLocators.enterPhoneNumberElement,this.updateInitiationInformationTestData.phoneNumber)
        await this.utility.typeText(this.updatePageLocators.enterEmailAddressElement,this.updateInitiationInformationTestData.email)
        await this.page.waitForTimeout(3000)
        await this.utility.clickOnElement(this.updatePageLocators.clickNextButtonElement)
    }

    async validateAddressInformationPage(){
        //pending
    }

    async enterAddressInformationAndNavigate(){
        await this.utility.typeText(this.updatePageLocators.permanentAddressElement,this.updateAddressInformationTestData.permAddress)
        await this.utility.typeText(this.updatePageLocators.permanentLandmarkElement,this.updateAddressInformationTestData.permLandmark)
        await this.utility.typeText(this.updatePageLocators.permanentPincodeElement,this.updateAddressInformationTestData.permPincode)
        await this.utility.clickOnFirstElement(this.updatePageLocators.clickPermanentPostOfficeOptionElement)
        await this.utility.clickFirstOptionByText(this.updateAddressInformationTestData.permPostOffice)
        //await this.utility.typeText(this.updatePageLocators.permanentAddressDistrictElement, this.updateAddressInformationTestData.permAddressDistrict)
        //await this.utility.typeText(this.updatePageLocators.permanentAddressStateElement,this.updateAddressInformationTestData.permAddressState)
        await this.utility.typeText(this.updatePageLocators.presentAddressElement,this.updateAddressInformationTestData.presAddress)
        await this.utility.typeText(this.updatePageLocators.presentAddressLandmarkElement,this.updateAddressInformationTestData.presLandmark)
        await this.utility.typeText(this.updatePageLocators.presentAddressPincodeElement,this.updateAddressInformationTestData.presPincode)
        await this.utility.clickOnLastElement(this.updatePageLocators.clickPresentPostOfficeOptionElement) //
        await this.utility.clickLastOptionByText(this.updateAddressInformationTestData.presPostOffice) //
        await this.utility.clickOnElement(this.updatePageLocators.clickNextButtonElement)
        //await this.utility.typeText(this.updatePageLocators.presentAddressDistrictElement,this.updateAddressInformationTestData.presAddressDistrict)
        //await this.utility.typeText(this.updatePageLocators.presentAddressStateElement,this.updateAddressInformationTestData.presAddressState)
    }

    async validateSummaryPage(){
        //pending
    }
    async enterSummaryInformationAndUpdate(){
        await this.utility.typeText(this.updatePageLocators.commentsElement,this.updateSummaryTestData.comments)
        await this.utility.typeText(this.updatePageLocators.workerInvolvedElement,this.updateSummaryTestData.workersInvolved)
        await this.utility.clickFirstOptionByText(this.updateSummaryTestData.workersInvolved)
        await this.utility.clickOnElement(this.updatePageLocators.submitButtonElement)
    }
}