const MainPage = require('../pageobjects/main-page');

describe('My test application', () => {
    it('should do the following', async () => {
        await MainPage.open();

        await MainPage.dropButton.click();

        //await MainPage.dropDownTextFinder();
        await MainPage.dropDownMenuByText();

        // going above and beyond
        // await $('#input-email').waitForExist({ timeout: 15000 });
        await MainPage.emailAddressInputField.waitForExist({ timeout: 15000 });
        expect(await MainPage.emailAddressInputField).toBeSelected( { wait: 60000} );
        console.log("derp derp");
        //expect(await MainPage.passwordInputField).toBeDisplayed( { wait: 60000} );

        await MainPage.emailInput();
        //await MainPage.emailAddressInputField.setValue('blah@blah.com');
        await MainPage.passwordInput();
        await MainPage.clickCheckMeOutCheckbox();
        await MainPage.clickSubmitButton();
        console.log("post derp derp");
        await MainPage.delayedElement1();
        await MainPage.delayedElement2();
        console.log("post post derp derp");
    });
});
