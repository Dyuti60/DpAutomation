const {test,chromium} = require('@playwright/test')
const loginPageDataQA = require('../testdata/datasetQA.json')
const loginPageDataProd = require('../testdata/datasetProd.json')
const constant = require('../constant/constant.json')
const locator = require('../locator/locators.json')

const loginFixture = test.extend({
    login: async({},use)=>{
        const loginPageConstant = constant.Constants
        const loginPageLocator = locator.loginPageLocators
        const loginPageCreds=loginPageDataQA.loginPage.fieldWorkers[0]
    
        const browser = await chromium.launch()
        const context = await browser.newContext();
        await context.setGeolocation(loginPageConstant.location);
        await context.grantPermissions(['geolocation'],{ origin: loginPageConstant.stageUrl });
        const authPage = await context.newPage();
        
        // Log in
        await authPage.goto(loginPageConstant.stageUrl);
        await authPage.fill(loginPageLocator.usernameElement, loginPageCreds.username);
        await authPage.fill(loginPageLocator.passwordElement, loginPageCreds.password);
        await authPage.click(loginPageLocator.loginBtnElement);
        await authPage.waitForSelector(loginPageLocator.logOutElement)
        await authPage.waitForTimeout(1000)
        
        // await context.storageState({path:'D://Latest2025//January2025//DpAutomation//DpAutomation//src//testdata//loginState.json'})
        // const webContext = await browser.newContext({storageState:'D://Latest2025//January2025//DpAutomation//DpAutomation//src//testdata//loginState.json'})
        await use(authPage)
    }
})
module.exports = {loginFixture}

// ('authenticatedContext', async () => {
//     const loginPageConstant = constant.Constants
//     const loginPageLocator = locator.loginPageLocators
//     const loginPageCreds=loginPageDataQA.loginPage.fieldWorkers[0]

//     const browser = await chromium.launch()
//     const context = await browser.newContext();
//     const authPage = await context.newPage();
    
//     // Log in
//     await authPage.goto(loginPageConstant.stageUrl);
//     await authPage.fill(loginPageLocator.usernameElement, loginPageCreds.username);
//     await authPage.fill(loginPageLocator.passwordElement, loginPageCreds.password);
//     await authPage.click(loginPageLocator.loginBtnElement);

//     // Return the authenticated context for reuse
//     return context;
//   });