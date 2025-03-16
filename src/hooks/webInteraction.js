exports.WebInteraction = class WebInteraction{
    constructor(page){
        this.page=page
    }
    async clickOnElement(locator){
        await this.page.locator(locator).click()
    }
    async typeText(locator, text){
        await this.page.locator(locator).fill(text)
    }
    async assertElementText(locator, expectedText){
        await expect(this.page.locator(locator).textContent()).toContain(expectedText)
    }
    async assertElementNotVisible(locator){
        await expect(this.page.locator(locator)).toBeHidden()
    }
    async assertElementVisible(locator){
        await expect(this.page.locator(locator)).toBeVisible()
    }
    async assertElementNotPresent(locator){
        await expect(this.page.locator(locator)).toBeEmpty()
    }
    async assertElementPresent(locator){
        await expect(this.page.locator(locator)).toBeVisible()
    }
}