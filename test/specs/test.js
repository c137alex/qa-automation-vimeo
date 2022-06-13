const MainPage = require('../pageobjects/main-page');

describe('My test application', () => {
    it('should do the following', async () => {
        await MainPage.open();
        
        await MainPage.dropButton.click();
        
        
        //await MainPage.dropDownTextFinder();
        await MainPage.dropDownMenuByText();
        
        await MainPage.inputEmail();
        
        await MainPage.inputPassword();
        
        await MainPage.clickCheckMeOutCheckbox();
        
        await MainPage.clickSubmitButton();
        
        await MainPage.delayedElement1();
        
        await MainPage.hereIsTheDesiredText();
    });
});
