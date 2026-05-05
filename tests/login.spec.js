// @ts-check
import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/login/LoginPage';

test.describe('Login', () => {
  
  /**
   * @type {LoginPage}
   */
  let loginPage;

  // @ts-ignore
  let basePage;

  test.beforeEach(async({ page }) => {
    await page.goto('/');
    basePage = new BasePage(page);
    loginPage = new LoginPage(page);
  });

  test('Login successful', async ({ page }) => {
    // @ts-ignore
    await basePage.accessLoginOrRegistration();
    await loginPage.signIn('Jazlyn_Morissette29@yahoo.com', 'Abc@123');
    await loginPage.loginSuccessful();
  });

  test('Login failed', async ({page}) => {
    // @ts-ignore

    await basePage.accessLoginOrRegistration();
    await loginPage.signIn('Jazlyn_Morissette29@gmail.com', '123456');
    await loginPage.loginFailed();
  });
});



