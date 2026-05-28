import { expect } from '@playwright/test';
export {LoginPage} from './login/LoginPage';
export {RegistrationPage} from './registration/RegistrationPage';

export class BasePage {
    constructor(page) {

        this.page = page;

        this.home = page.getByText('Home');
        this.products = page.getByText('Products');
        this.cart = page.getByText('Cart');
        this.registerLogin = page.getByText('Login');
        this.contact = page.getByText('Contact us');
    }

    async accessHome(){
        await expect(this.home).toBeVisible();
        await this.home.click();
    }

    async accessLoginOrRegistration(){
        await expect(this.registerLogin).toBeVisible();
        await this.registerLogin.click();
    }

    async accessProducts(){
        await expect(this.products).toBeVisible();
        await this.products.click();
    }

    async accessCart(){
        await expect(this.cart).toBeVisible();
        await this.cart.click();
    }

    async accessContact(){
        await expect(this.contact).toBeVisible();
        await this.contact.click();
    }
}