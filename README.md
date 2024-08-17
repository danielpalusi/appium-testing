# Appium Testing Project

This project is set up to run automated tests using Appium, WebDriverIO (WDIO), and an Android emulator. The tests are written in JavaScript and are designed for both Android and iOS applications using the UIAutomator2 and XCUITest drivers, respectively. (iOS example is still in progress 😅)

## Prerequisites

Before you get started, ensure you have the following installed on your machine:

- **Node.js** (version 14.x or higher)
- **Appium** (installed via NPM)
- **Android Studio** (for managing the Android emulator)
- **Xcode** (for iOS development and managing the iOS simulator)
- **Java Development Kit (JDK)** (required for Android development)

### For Android Testing

- **UIAutomator2 Driver** (installed as part of Appium)
- **Android Emulator** (set up in Android Studio)
- **bitbar-sample-apk**: The Android APK used for testing. You can find it at [bitbar/test-samples](https://github.com/bitbar/test-samples).

### For iOS Testing

- **XCUITest Driver** (installed as part of Appium)
- **Xcode** (required for running tests on iOS simulators or devices)
- **iOS Simulator** (configured in Xcode)

## Optional Tools

- **Appium Inspector**: This tool allows you to inspect the mobile app’s UI elements and interact with them. It's useful for identifying element locators and debugging your test scripts. You can download it as part of the Appium Desktop application or use it through the Appium server's URL if you have it installed.

## Project Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/danielpalusi/appium-testing.git
    cd appium-testing
    ```

2. **Install dependencies**:

    Install the project dependencies using `npm`:

    ```bash
    npm install
    ```

3. **Configure Android Emulator**:

    Make sure you have a configured Android emulator in Android Studio and it's running before executing the tests.

4. **Configure iOS Simulator**:

    If you are testing on iOS, ensure that you have a configured iOS simulator in Xcode. You can launch the simulator from Xcode by selecting the device and OS version.

5. **Update WebDriverIO Configuration**:

    Update the `wdio.conf.js` file with the appropriate settings for your Android or iOS emulator, Appium, and the test suite. Ensure the correct capabilities are set for Android or iOS testing.

## Running Tests

You can execute the tests using the following command:

```bash
npm run wdio
```

This command will use WebDriverIO to run your tests against the Android or iOS emulator using the configuration specified in wdio.conf.js.

## Key Dependencies

- **Appium**: Provides the core automation for mobile applications.
- **WebDriverIO**: A test framework for browser and mobile automation.
- **Mocha**: The test framework for structuring your test cases.
- **WDIO Appium Service**: Integrates Appium with WebDriverIO for managing Appium server sessions.
- **UIAutomator2 Driver**: Used for automating Android applications.
- **XCUITest Driver**: Used for automating iOS applications.
- **Chromedriver**: Required if you're testing any web interactions on Android or iOS devices' browsers.
- **ts-node**: Required for running TypeScript files in your test automation setup.


