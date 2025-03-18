exports.WebInteraction = class WebInteraction{
    constructor(page){
        this.page=page
    }
    async navigateToUrl(url){
        await this.page.goto(url)
    }
    async clickOnElement(locator){
        await this.page.waitForSelector(locator)
        await this.page.locator(locator).click()
        await this.page.waitForTimeout(200)
    }
    async clickOnFirstElement(locator){
        await this.page.waitForSelector(locator)
        await this.page.locator(locator).first().click()
        await this.page.waitForTimeout(200)
    }
    async clickOnLastElement(locator){
        await this.page.waitForSelector(locator)
        await this.page.locator(locator).last().click()
        await this.page.waitForTimeout(200)
    }
    async typeText(locatorr, text){
        await this.page.waitForSelector(locatorr)
        await this.page.waitForTimeout(500)
        await this.page.locator(locatorr).fill(text)
        await this.page.waitForTimeout(500)
    }
    async clickOptionByText(stringg){
        await this.page.locator(`text=/${stringg}/i`).click()
    }
    async clickFirstOptionByText(stringg){
        await this.page.locator(`text=/${stringg}/i`).first().click()
    }
    async clickLastOptionByText(stringg){
        await this.page.locator(`text=/${stringg}/i`).last().click()
    }
    // async assertElementText(locator, expectedText){
    //     await expect(this.page.locator(locator).textContent()).toContain(expectedText)
    // }
    // async assertElementNotVisible(locator){
    //     await expect(this.page.locator(locator)).toBeHidden()
    // }
    // async assertElementVisible(locator){
    //     await expect(this.page.locator(locator)).toBeVisible()
    // }
    // async assertElementNotPresent(locator){
    //     await expect(this.page.locator(locator)).toBeEmpty()
    // }
    // async assertElementPresent(locator){
    //     await expect(this.page.locator(locator)).toBeVisible()
    // }
}