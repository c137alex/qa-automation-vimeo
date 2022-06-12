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

    async emailInput () {
        //await this.emailAddressInputField.click();
        //let input = await $(`[type=email]`);
        let input = await $(`#input-email`);
        $(await input.setValue('sophie.wilson137@null.arm64.io'));
        //return $(await input)
        //return $(await input.setValue('sophie.wilson137@null.arm64.io'));
    }

    async passwordInput () {
        //await this.passwordInputField.click();
        //let input = await $(`[type=password]`);
        let input = await $(`#password`);
        $(await input.setValue('AllYourBaseAreBelongToUs'));
        //return $(await input.setValue('AllYourBaseAreBelongToUs'));
    }

    async clickCheckMeOutCheckbox () {
        await this.checkMeOutCheckBox.click()
    }

    async clickSubmitButton () {
        await this.submitButton.click()
    }

    async delayedElement1 () {
        // use element li and search by text
        let element = $('div=Took me a bit but here I am!');
        console.log(await element.getText());
        //await dropDownMenuItem2.click();
        //return dropDownMenuItem2;
    }

    async delayedElement2 () {
        // use element li and search by text
        let element = $('span=Another delayed elem');
        console.log(await element.getText());
        //await dropDownMenuItem2.click();
        //return dropDownMenuItem2;
    }
}

module.exports = new MainPage();
