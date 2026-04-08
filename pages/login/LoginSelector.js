export class LoginSelector{
    constructor(page){
        this.page = page;

        this.inputEmail = page.locator('form', { hasText: 'Login' }).locator('input[name="email"]');
        this.inputPassword = page.locator('form', { hasText: 'Login' }).locator('input[name="password"]');
        this.ButtonLogin = page.locator('form', { hasText: 'Login' }).locator('button', { hasText: 'Login' });
        this.ButtonLogout = page.locator('a', {hasText: 'Logout'});
        this.msgErrorLogin = page.locator('text=Your email or password is incorrect!'); 
        
    }
}