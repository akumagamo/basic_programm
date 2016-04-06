module.exports = function () {
  this.Given(/^the app started$/, function (callback) {
	callback();
  });

  this.When(/^I call the function$/, function (callback) {
	callback();
  });

  this.Then(/^the Message is "(.*)" is shown$/, function (message, callback) {
    // matching groups are passed as parameters to the step definition

    if ("Hello World!" === message) {
      callback();
    } else {
      callback(new Error("wrong message " + message));
    }
  });
};