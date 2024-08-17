exports.config = {
  services: [
    [
      "appium",
      {
        command: "appium",
        args: {},
      },
    ],
  ],

  baseUrl: "http://localhost:4723/wd/hub",
  specs: ["./test/specs/**/*.js"],

  capabilities: [
    {
      platformName: "Android",
      browserName: "",
      "appium:deviceName": "Pixel 3 for Testing",
      "appium:platformVersion": "10.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "./apk/bitbar-sample-app.apk",
    },
  ],

  framework: "mocha",

  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
