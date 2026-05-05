import { test } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';
import { LogoutPage } from '../pages/logout/LogoutPage';
import { BasePage } from '../pages/BasePage';

test('Logout successfully', async ({page}) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);
    
    await page.goto('/');
    await basePage.accessLoginOrRegistration();
    await loginPage.signIn('Jazlyn_Morissette29@yahoo.com', 'Abc@123');
    await loginPage.loginSuccessful();

    await logoutPage.logout();
    await logoutPage.validateLogout();
});