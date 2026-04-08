// @ts-check
import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { createUser } from './factories/user.factory';

test.describe('Register', () => {

    /**
   * @type {RegistrationPage}
   */
    let registrationPage;

    test.beforeEach(async({ page }) => {
    await page.goto('/');

    registrationPage = new RegistrationPage(page);
});

test('Register with an email already registered on the platform', async ({ page }) => {
    await registrationPage.signUp('Mary', 'Jazlyn_Morissette29@yahoo.com');
    await registrationPage.emailAlreadyRegistered();
  });

test('Register successful', async ({ page }) => {
    const user = createUser();

    await registrationPage.signUp(
      user.firstName,
      user.email
    );
    await registrationPage.registerSuccessful();
    await registrationPage.selectGender('Mrs');
    await registrationPage.fillPassword(user.password);
    await registrationPage.selectDay(15);
    await registrationPage.selectMonth('April');
    await registrationPage.selectYear(2000);
    await registrationPage.selectNewsletter();
    await registrationPage.selectOffers();
    await registrationPage.fillFirstName(user.firstName);
    await registrationPage.fillLastName(user.lastName);
    await registrationPage.fillAddress(user.address);
    await registrationPage.selectCountry(user.country);
    await registrationPage.fillState(user.state);
    await registrationPage.fillCity(user.city);
    await registrationPage.fillZipCode(user.zipCode);
    await registrationPage.fillMobileNumber(user.mobile);
    await registrationPage.clickCreateAccount();
    await registrationPage.validateAccountCreated();
    await registrationPage.clickContinueRegister();
  });
});
