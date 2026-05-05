export class CartSelector{
    constructor(page){
        this.page = page;

        this.productInfo = page.locator('a[href="/product_details/2"]');
        this.quantity = page.locator('#quantity');
        this.addCartButton = page.locator('button:has-text("Add to cart")');
        this.viewCart = page.locator('text=View Cart');
        this.unitPrice = page.locator('td.cart_price p');
        this.totalPrice = page.locator('p.cart_total_price');
        this.removeProductButton = page.locator('a[data-product-id="2"]');
        this.emptyCartMessage = page.locator('text=Cart is empty! Click here to buy products.');

    }
}


