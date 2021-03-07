const wdio = require('webdriverio');
const assert = require('assert');
const flutterFinder= require('appium-flutter-finder');
const { Console } = require('console');

const osSpecificOps =
     {
        platformName: 'Android',
        deviceName: 'Android SDK built for x86 (mobile)',
      app:'/home/flutterdev/Programming/FlutterApp/automationtestapp/build/app/outputs/flutter-apk/app-debug.apk' 
      };

const opts = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    automationName: 'Flutter'
  }
};
const usernameField = flutterFinder.byValueKey('userNameKey');
const emailField = flutterFinder.byValueKey('emailKey');
const passwordField= flutterFinder.byValueKey('passwordKey');
const confirmPassworField = flutterFinder.byValueKey('confirmPasswordKey');
const regStat = flutterFinder.byValueKey('registrationStatusKey');
const signupBtn= flutterFinder.byValueKey('signupBtn');

const loginUserNameField = flutterFinder.byValueKey('loginUsername');
const loginPasswordField= flutterFinder.byValueKey('loginPassword');
const loginStat = flutterFinder.byValueKey('loginStatus');
const loginBtn= flutterFinder.byValueKey('loginBtn');



(async()=>{

  const driver = await wdio.remote(opts);
 await driver.switchContext('NATIVE_APP');
  // await driver.saveScreenshot('./native-screenshot.png');
  await driver.switchContext('FLUTTER');
  console.log("TEST SCENARIO: Registering User");
  console.log("*********************************");

  console.log("Test Case: Sign IN WITH INVALID EMAIL");
  console.log("*********************************");
  
  // await driver.elementClick(signupBtn);
  // await assert.strictEqual(await driver.getElementText(regStat),"incomplete");
  // await driver.elementSendKeys(usernameField,"Suresh Karki");
      // await driver.elementSendKeys(emailField,"sureshkarki") 
  //  await driver.elementClick(signupBtn);
  //  await assert.strictEqual(await driver.getElementText(regStat),"invalidEmail");

   console.log("Test Case: Valid Username and Email ")
  console.log("*********************************");
  await driver.elementSendKeys(usernameField,"Suresh Karki");
      await driver.elementSendKeys(emailField,"aatitkarki12@gmail.com") 
      await driver.elementSendKeys(passwordField,"password");
      await driver.elementSendKeys(confirmPassworField,"password");
  await driver.elementClick(signupBtn);

  //  await assert.strictEqual(await driver.getElementText(regStat),"regSuccess");
  // console.log("Test Case: Switching Back to Check previous Field")

  //  await driver.elementClick(signupBtn); 
  // await driver.switchContext('NATIVE_APP');
  // await driver.back();
  // await driver.switchContext('FLUTTER');
   console.log("This is the good ****************************")
  //  await driver.elementSendKeys(usernameField,"Suresh Karki");
      // await driver.elementSendKeys(emailField,"aatitkarki12@gmail.com") 
      // await driver.elementSendKeys(passwordField,"password");
      // await driver.elementSendKeys(confirmPassworField,"password");
      
  // await driver.elementClick(signupBtn);


  // await driver.elementSendKeys(usernameField,"Suresh Karki")

  //  assert.strictEqual(await driver.getElementText(usernameField),"Suresh Karki");
  // await driver.saveScreenshot('./native-screenshot1.png');
  // assert.strictEqual(await driver.getElementText(counterTextFinder),'5');
  // await driver.elementClick(buttonFinder);
  // await driver.elementClick(buttonFinder);
  // await driver.elementClick(buttonFinder);
  // await driver.elementClick(buttonFinder);
  // await driver.touchAction({
    // action: 'tap',
    // element: {elementId: buttonFinder}
  // });
  // await driver.saveScreenshot('./native-screenshot1.png');
  // assert.strictEqual(await driver.getElementText(counterTextFinder),'5');
  // await driver.elementClick(buttonFinder);
  // assert.strictEqual(await driver.getElementText(counterTextFinder),'6');
  // driver.deleteSession();
})();