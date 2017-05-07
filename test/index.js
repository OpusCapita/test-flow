import retry from 'async-retry';
import fetch from 'node-fetch';
import { Selector } from 'testcafe';
import { LoginPage } from './pages';

const { argv } = require('yargs');
const TESTING_URL = argv.testing_url || 'http://localhost:8080';

// prevents breaking tests if TESTING_URL isn't available yet
fixture('Onboarding').page('http://google.com');

async function validateTestingUrl() {
  await retry(async bail => {
    // if anything throws, we retry
    const res = await fetch(`${TESTING_URL}/onboarding/`);

    if (!res.url.indexOf('/interaction/') || res.status === 502) {
      throw(new Error());
    }

    return true;
  })
}

test('Onboarding login', async (t) => {
  const loginPage = new LoginPage();

  await validateTestingUrl();

  await t
    .navigateTo(`${TESTING_URL}/onboarding/`)
    .typeText(loginPage.loginInput, 'john.doe@ncc.com')
    .typeText(loginPage.passwordInput, 'test')
    .click(loginPage.submitFormButton);

  const location = await t.eval(() => window.location);

  await t.expect(location.pathname).eql('/onboarding/');
});
