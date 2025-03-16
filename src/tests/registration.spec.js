const {test,chromium} = require ('@playwright/test')
import {RegistrationPage} from '../page/RegistrationPage'
const constant = require('../constant/constant')
test('Validate Registration Page',async ()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    await context.setGeolocation(constant.Constants.location);
    await context.grantPermissions(['geolocation'],{ origin: constant.Constants.prodUrl });
    const page = await context.newPage()
    const registrationPage = new RegistrationPage(page)
    await page.goto(constant.Constants.prodUrl)
    
    await registrationPage.navigateToRegistrationPage()
    await registrationPage.validateRegistrationPage()
    await registrationPage.enterUserRegistrationDetails()
    await page.waitForTimeout(4000)
    //await RegistrationPage.submitRegistrationForm()

})