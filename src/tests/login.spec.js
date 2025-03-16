const {test,chromium} = require('@playwright/test')
import {LoginPage} from '../page/LoginPage'
const loginPageDataQA = require('../testdata/datasetQA.json')
const loginPageDataProd = require('../testdata/datasetProd.json')
const constant = require('../constant/constant.json')

test('Login Page Functionality Validation',async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    await context.setGeolocation(constant.Constants.location);
    
      // Optionally, you can also override permissions for location
    await context.grantPermissions(['geolocation'],{ origin: constant.Constants.prodUrl });
    //await context.grantPermissions(['geolocation'], { origin: constant.Constants.prodUrl })
    const page = await context.newPage()

    const loginPage = new LoginPage(page)
    await page.goto(constant.Constants.prodUrl)
    //await loginPage.navigateToLoginPage('https://stage.dpworks.in/login')
    await loginPage.validateLoginPage()
    await loginPage.enterCredentials(loginPageDataProd.loginPage.fieldWorkers[0].username,loginPageDataProd.loginPage.fieldWorkers[0].password)
    await loginPage.isLoggedIn()
})