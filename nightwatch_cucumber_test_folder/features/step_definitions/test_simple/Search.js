/**
* Steps definition to test login functionalities.
*
* @author Karen Duque
*/

var URL = "https://www.google.com.co/";

module.exports = function () {

  this.Given(/^I am in Google page$/, function () {
    this
      .url(URL)
      .resizeWindow(1500, 1000)
      .refresh()
  }),

    this.When(/^I fill the "Search" field with "([^"]*)"$/, function (Search) {
      this
        .useCss()
        //.assert.elementPresent('input[id=lst-ib]')
        //.setValue('input[id=lst-ib]', Search)
        .assert.elementPresent('input[class="gLFyf gsfi"]')
        .setValue('input[class="gLFyf gsfi"]', Search)
        .pause(2000)
    }),

    this.When(/^I click the "([^"]*)" button$/, function (Name_Button) {

      if (Name_Button == "Buscar con Google") {
        this
          .useXpath()
          .click('//*[@id="tsf"]/div[2]/div[1]/div[2]/div[2]/div[2]/center/input[1]')
          .pause(5000)
      }
    }),

    this.Then(/^I see the results related to "([^"]*)"$/, function (search) {
      this
        .useCss()
        .assert.containsText('#rcnt', search);

    })
}