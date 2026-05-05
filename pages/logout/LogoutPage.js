import { expect } from '@playwright/test'
import { LogoutSelector } from './LogoutSelector';

export class LogoutPage {
    constructor(page) {
        this.page = page;
        this.LogoutSelector = new LogoutSelector(page);
    }

    async logout() {
        await this.LogoutSelector.logoutButton.click();
    }
    async validateLogout() {
        await expect(this.page).toHaveURL(/login/);
        await expect(this.LogoutSelector.logoutButton).not.toBeVisible();
    }
}