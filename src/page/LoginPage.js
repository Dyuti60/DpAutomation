import {LoginPageAssertion} from '../assertion/LoginPageAssertion'
const locators = require('../locator/locators.json')

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.loginPageAssertion = new LoginPageAssertion(page)
        this.usernameLocator = locators.loginPageLocators.usernameElement
        this.passwordLocator = locators.loginPageLocators.passwordElement
        this.loginBtnLocator = locators.loginPageLocators.loginBtnElement
    }

    async navigateToLoginPage(url){
        await this.page.goto(url)
    }

    async validateLoginPage(){
        await this.page.waitForLoadState('load')
        await this.page.locator(this.loginBtnLocator).isVisible()
        await this.loginPageAssertion.loginPageAllAssertions()
    }

    async enterCredentials(username, password){
        await this.page.locator(this.usernameLocator).fill(username)
        await this.page.locator(this.passwordLocator).fill(password)
        await this.page.locator(this.loginBtnLocator).click()
    }

    async isLoggedIn(){
        await this.loginPageAssertion.isLoggedInAssertion()
    }

}