import { test, expect } from '../fixtures/test-fixtures';

test('Verify products are displayed after login', async ({ page, loggedInPage }) => {

  await expect(page.locator('.title'))
    .toHaveText('Products');

  const products = page.locator('.inventory_item');

  await expect(products).toHaveCount(6);

});