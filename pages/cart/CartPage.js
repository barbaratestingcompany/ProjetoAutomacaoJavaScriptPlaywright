import { expect } from '@playwright/test';
import { CartSelector } from '../cart/CartSelector';

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartSelector = new CartSelector(page);
    }
    
    async addProductToCart(quantity) {
        await this.cartSelector.productInfo.click();

        await this.cartSelector.addCartButton.click();
        await this.cartSelector.viewCart.click();
    }

    async validateTotal() {
        const unitPriceText = await this.cartSelector.unitPrice.textContent();
        const totalPriceText = await this.cartSelector.totalPrice.textContent();
        const unitPrice = this.parsePrice(unitPriceText);
        const totalPrice = this.parsePrice(totalPriceText);
        const expectedTotal = unitPrice;

        expect(totalPrice).toBe(expectedTotal);
    }
    
    /* Method to convert a string to a number */
    parsePrice(text) {
        return Number(text.replace(/[^0-9]/g, ''));
    }
    
    async removeProduct() {
        await this.cartSelector.removeProductButton.click();
    }
    
    async validateEmptyCart() {
        await expect(this.cartSelector.emptyCartMessage).toBeVisible();
    }
}
