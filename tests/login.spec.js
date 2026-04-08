// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pages/BasePage';

test.describe('Login', () => {
  
  let loginPage;

  test.beforeEach(async({ page }) => {
    await page.goto('/');

    loginPage = new LoginPage(page);
  });
  test('Login successful', async ({ page }) => {
    await loginPage.signIn('Jazlyn_Morissette29@yahoo.com', 'Abc@123');
    await loginPage.loginSuccessful();
  });

  test('Login failed', async ({page}) => {
    await loginPage.signIn('Jazlyn_Morissette29@gmail.com', '123456');
    await loginPage.loginFailed();
  });
});



