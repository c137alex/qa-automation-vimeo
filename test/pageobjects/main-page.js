const { waitForConditionInBrowser } = require('wd/lib/commands');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropButton () {
        return $('#drop-button');
    }

    get emailAddressInputField () {
        return $('#input-email')
    }

    get passwordInputField () {
        return $('#password')
    }

    get checkMeOutCheckBox () {
        return $('#check')
    }

    get submitButton () {
        return $('#submit')
    }

    /**
     * define logic
     */
    async dropDownMenuByText () {
        // use element li and search by text
        let dropDownMenuItem2 = $('li=click to reveal form');
        console.log(await dropDownMenuItem2.getText());
        await dropDownMenuItem2.click();
        //return dropDownMenuItem2;
    }

    async dropDownTextFinder () {
        let ddElement = $('.dropdown-menu');
        let val = $(await ddElement.getText());
        expect(val).toEqual('click to reveal form').click();
    }

    async inputEmail() {

        let input = this.emailAddressInputField
        await expect(input).toBeDisplayed( {wait: 10000} ) 
        await input.setValue('derp@derp.com');
    }

    async inputPassword() {
        let input = this.passwordInputField
        await expect(input).toBeDisplayed( {wait: 10000} )
        await input.setValue('Derpderp123')
    }

    async clickCheckMeOutCheckbox() {
        let input = this.checkMeOutCheckBox
        await expect(input).toBeDisplayed( {wait: 10000} )
        await input.click()
    }

    async clickSubmitButton() {
        let element = this.submitButton
        await expect(element).toBeDisplayed( {wait: 10000} )
        await element.click()
    }

    async delayedElement1 () {
        // use element li and search by text
        let element = $('div.delayedElem');
        //await expect(element).toBeDisplayed( {wait: 5000})
        //await expect(element).getText().toEqual("Took me a bit but here I am!");
        await expect(element).toHaveText("Took me a bit but here I am!");
        //await dropDownMenuItem2.click();
        //return dropDownMenuItem2;
    }

    async hereIsTheDesiredText () {
        let element = $("div[id^='base-']")
        await expect(element).toHaveText("here is the desired text")
    }
}

module.exports = new MainPage();
