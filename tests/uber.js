describe('Uber', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));
/*
    test('Open Uber Website', function (browser) {
      browser
        .useXpath()
        .assert.elementPresent('/html/head/title')
        .assert.elementPresent('//*[@id="main"]')
        .end();
    });

    test('Check block login in the header wrapper', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .end();
    });

    test('Check login block in two sections', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .end();
    });

    test('Check login chauffeur section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="useridInput"]')
        .end();
    });

    test('Check login passager section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a/div')
        .assert.urlContains('https://auth.uber.com/login')
        .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a/div')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/a[1]/div')
        .waitForElementPresent('//*[@id="googleLoginButton"]/div')
        .end();
    });

    test('Check Registration block in two sections', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .end();
    });
*/
    test('Check Registration block with Devenir Professional section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .assert.urlContains('https://www.uber.com/a/join-new')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input')
        .end();
    });

    test('Check Registration block with Commander une course section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="firstName"]')
        .waitForElementPresent('//*[@id="lastName"]')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@id="email"]')
        .waitForElementPresent('//*[@id="addPassword"]')
        .end();
    });

test('Registration with Commander une course section shouldn\'t pass', function (browser) {
  browser
    .useXpath()
    .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
    .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
    .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
    .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
    .click('//*[@id="answerForm"]/button')
    .waitForElementPresent('//*[@id="error-caption-mobile"]')
    .end();
});

test('Registration should pass', function (browser) {
  browser
    .useXpath()
    .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
    .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
    .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
    .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
    .assert.urlContains('https://auth.uber.com/login')
    .setValue('//*[@id="firstName"]', 'Boulanouar')
    .getValue('//*[@id="firstName"]')
    .setValue('//*[@id="lastName"]', 'Baghdadi')
    .getValue('//*[@id="lastName"]')
    .setValue('//*[@id="mobile"]', '23456789')
    .getValue('//*[@id="mobile"]')
    .setValue('//*[@id="email"]', 'b@b')
    .getValue('//*[@id="email"]')
    .setValue('//*[@id="addPassword"]', 'ceciEstUnMdp123')
    .getValue('//*[@id="addPassword"]')
    .click('//*[@id="answerForm"]/button')
    .end();
});

/*
// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
  .waitForElementVisible('body')
// Revenir sur du CSS
.useCSS()
*/


});
