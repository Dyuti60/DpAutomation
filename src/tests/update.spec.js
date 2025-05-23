const {test, chromium} = require('@playwright/test')
const {loginFixture} = require('../fixtures/loginFixtures')
import {UpdatePage} from '../page/UpdatePage'
loginFixture('Update Functionality', async ({login})=>{
    const page = await login
    const updatePage = new UpdatePage(page)
    await updatePage.clickUpdateFromNavigationMenu()
    await updatePage.enterSerialNumber()
    await updatePage.clickSearchButton()
    //await updatePage.clearSerialNumberEntered()
    await updatePage.navigateToPersonalInformationPage()
    await updatePage.enterPersonalInformationAndNavigate()
    await updatePage.enterInitiationInformationAndNavigate()
    await updatePage.enterAddressInformationAndNavigate()
    await updatePage.enterSummaryInformationAndUpdate()
    await page.waitForTimeout(3000)

})
