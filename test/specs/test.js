const MainPage = require('../pageobjects/main-page');

describe('My test application', () => {
    it('should do the following', async () => {
        await MainPage.open();

        await MainPage.dropButton.click();

        await MainPage.dropDownMenuByText.click();

        /**
        * going above and beyond
        expect(await MainPage.emailAddressInputField).toBeDisplayed();
        expect(await MainPage.passwordInputField).toBeDisplayed();
        */
    });
});
