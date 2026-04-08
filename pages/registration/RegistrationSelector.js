export class RegistrationSelector{
    constructor(page){
        this.page = page;
        this.inputName = page.locator('[data-qa="signup-name"]');
        this.inputEmail = page.locator('[data-qa="signup-email"]');
        this.inputPassword = page.locator('#password');
        this.buttonSignUp = page.locator('[data-qa="signup-button"]');
        this.msgEmailAlreadyRegistered = page.locator('text=Email Address already exist!');
        this.genderOptions = page.locator('input[name="title"]');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.checkboxNewsletter = page.locator('#newsletter');
        this.checkboxOffers = page.locator('#optin');
        this.inputFirstName = page.locator('#first_name');
        this.inputLastName = page.locator('#last_name');
        this.inputAddress = page.locator('#address1');
        this.countrySelector = page.locator('#country');
        this.inputState = page.locator('#state');
        this.inputCity = page.locator('#city');
        this.inputZipCode = page.locator('#zipcode');
        this.inputMobileNumber = page.locator('#mobile_number');
        this.buttonCreateAccount = page.locator('[data-qa="create-account"]');
        this.buttonContinueRegister = page.locator('[data-qa="continue-button"]');
        this.accountCreatedMessage = page.locator('text=ACCOUNT CREATED!');
    }
}


