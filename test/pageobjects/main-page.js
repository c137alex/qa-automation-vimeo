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
    get dropDownMenuByText () {
        // use element li and search by text
        let dropDownMenuItem2 = $('li=click to reveal form');
        return dropDownMenuItem2;
    }

    async emailInput () {
        await this.emailAddressInputField.click();
        let input = await $(`[type=email]`);
        return $(await input.setValue('sophie.wilson137@null.arm64.io'));
    }

    async passwordInput () {
        await this.passwordInputField.click();
        let input = await $(`[type=password]`);
        return $(await input.setValue('AllYourBaseAreBelongToUs'));
    }
}

module.exports = new MainPage();
