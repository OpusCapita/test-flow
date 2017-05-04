import { Selector } from 'testcafe';

export class LoginPage {
  constructor() {
    this.loginInput = Selector('input[name=login]');
    this.passwordInput = Selector('input[name=password]');
    this.submitFormButton = Selector('input[name=submit]');
  }
}
