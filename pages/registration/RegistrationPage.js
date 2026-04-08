import { RegistrationSelector } from './RegistrationSelector';
import { expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.registrationSelector = new RegistrationSelector(page);
    }

    async openSignupTab() {
        await this.registrationSelector.tabSignup.click();
    }

    async fillName(name) {
        await this.registrationSelector.inputName.fill(name);
    }

    async fillEmail(email) {
        await this.registrationSelector.inputEmail.fill(email);
    }

    async fillPassword(password) {
        await this.registrationSelector.inputPassword.fill(password);
    }

    async clickSignup() {
        await this.registrationSelector.buttonSignUp.click();
    }
    
    async selectGender(option) {
        await this.page.getByLabel(option + '.').check();
    }
    
    async registerSuccessful() {
        await expect(this.page.getByText('Title')).toBeVisible();
    }

    async emailAlreadyRegistered(){
        await expect(this.registrationSelector.msgEmailAlreadyRegistered).toBeVisible();
    }
    
    async selectDay(day) {
        await this.registrationSelector.dayDropdown.selectOption(day.toString());
    }

    async selectMonth(month) {
        await this.registrationSelector.monthDropdown.selectOption(month);
    }

    async selectYear(year) {
        await this.registrationSelector.yearDropdown.selectOption(year.toString());
    }
    async selectNewsletter(){
        await this.registrationSelector.checkboxNewsletter.check();
    }
    async selectOffers(){
        await this.registrationSelector.checkboxOffers.check();
    }

    async fillFirstName(firstName) {
        await this.registrationSelector.inputFirstName.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.registrationSelector.inputLastName.fill(lastName);
    }

    async fillAddress(address) {
        await this.registrationSelector.inputAddress.fill(address);
    }

    async selectCountry(country) {
    await this.registrationSelector.countrySelector.selectOption(country);
    await expect(this.registrationSelector.countrySelector)
        .toHaveValue(country);
    }

    async fillState(state){
        await this.registrationSelector.inputState.fill(state);
    }

    async fillCity(city){
        await this.registrationSelector.inputCity.fill(city);
    }

    async fillZipCode(zipcode){
        await this.registrationSelector.inputZipCode.fill(zipcode);
    }

    async fillMobileNumber(mobileNumber){
        await this.registrationSelector.inputMobileNumber.fill(mobileNumber);
    }

    async clickCreateAccount() {
        await this.registrationSelector.buttonCreateAccount.click();
    }
    
    async validateAccountCreated() {
        await expect(
            this.registrationSelector.accountCreatedMessage
        ).toBeVisible();

        await expect(
            this.registrationSelector.buttonContinueRegister
        ).toBeVisible();
    }
    
    async clickContinueRegister() {
        await this.registrationSelector.buttonContinueRegister.click();
    }

    async signUp(name, email){
        const basePage = new BasePage(this.page);
        await basePage.accessLoginOrRegistration();
        await this.fillName(name);
        await this.fillEmail(email);
        await this.clickSignup();
    }
}
