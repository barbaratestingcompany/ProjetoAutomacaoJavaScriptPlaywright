import { expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { LoginSelector } from './LoginSelector';

export class LoginPage{
    constructor(page){
        this.page = page;
        this.loginSelector = new LoginSelector(page);
    }

    async fillEmail(email){
        await expect(this.loginSelector.inputEmail).toBeVisible();
        await this.loginSelector.inputEmail.fill(email);
    }
    async fillPassword(password){
        await this.loginSelector.inputPassword.fill(password);
    }
    async clickButtonLogin(){
        await this.loginSelector.ButtonLogin.click();
    }
    async loginSuccessful(){
        await expect(this.loginSelector.ButtonLogout).toBeVisible();
    }
    async loginFailed(){
        await expect(this.loginSelector.msgErrorLogin).toBeVisible();
    }
    async signIn(email, password){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickButtonLogin();
    }
}