const assert = require("assert");

describe("Check if RadioButton exists", () => {
  it("should verify if the RadioButton element exists", async () => {
    const radioButton = await driver.$(
      '//android.widget.RadioButton[@resource-id="com.bitbar.testdroid:id/radio0"]'
    );

    const isExisting = await radioButton.isExisting();

    assert.strictEqual(isExisting, true);
  });
});
