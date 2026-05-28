import { test } from '@playwright/test';
import { CartPage } from '../pages/cart/CartPage';

test('View product and add product to cart', async ({page}) => {
    const cartPage = new CartPage(page);

    await page.goto('/');
    await cartPage.addProductToCart();
    await cartPage.validateTotal();
});

test('Remove product from cart', async ({ page }) => {
  const cartPage = new CartPage(page);

  await page.goto('/');
  await cartPage.addProductToCart();
  await cartPage.removeProduct(2);
  await cartPage.validateEmptyCart();
});

test('Adding a review to the product', async ({ page }) => {
  const cartPage = new CartPage(page);

  await page.goto('/');
  await cartPage.addProductToCart();
  await cartPage.addingAReview();
});



