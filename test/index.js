const { argv } = require('yargs');

const TESTING_URL = argv.testing_url || 'localhost:8080';
import { Selector } from 'testcafe';
import { LoginPage } from './pages';

fixture('Onboarding').page(`${TESTING_URL}/onboarding/`);

test('Onboarding login', async (t) => {
  const loginPage = new LoginPage();

  await t
    .typeText(loginPage.loginInput, 'john.doe@ncc.com')
    .typeText(loginPage.passwordInput, 'test')
    .click(loginPage.submitFormButton);

  const location = await t.eval(() => window.location);

  await t.expect(location.pathname).eql('/onboarding/');
});
