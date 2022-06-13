const MainPage = require('../pageobjects/main-page');

describe('My test application', () => {
    it('should do the following', async () => {
        await MainPage.open();

        await MainPage.dropButton.click();

        //await MainPage.dropDownTextFinder();
        await MainPage.dropDownMenuByText();
    });
});
