import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

type Fixtures = {
  loggedInPage: void;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await use();
  },
});

export { expect };