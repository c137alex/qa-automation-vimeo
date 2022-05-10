# vimeo-automation-exercise

This repo uses https://webdriver.io (async mode) to automate actions against https://apkatsikas.github.io.

##### Pre-reqs:
* Node.js 12.x.xx or 14.x.xx (including npm)
* Google Chrome (version 101 or higher)

##### Install and run
Run the following in your terminal after changing directory to this repository:

0. npm install
0. npm run test

##### Instructions

Once you have installed and run the test:

0. Fork the repository
0. Familiarize yourself with the page source of https://apkatsikas.github.io
0. Familiarize yourself with [WebdriverIO's selectors (CSS3)](https://webdriver.io/docs/selectors), [element API (such as getText)](https://webdriver.io/docs/api/element/getText) and [expect functions](https://webdriver.io/docs/api/expect-webdriverio)
0. Familiarize yourself with the [main-page page object](test/pageobjects/main-page.js) and the [test file](test/specs/test.js)
0. Add a step to the test file to click an item in the drop-down with text equal to 'click to reveal form'
0. Commit and push your change and share it with Vimeo recruiting

The rest of the exercise will be done during the technical interview via Zoom screenshare. A Vimeo engineer will ask you to continue to add steps to the test.
