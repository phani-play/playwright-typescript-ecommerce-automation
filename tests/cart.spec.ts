import { test, expect } from '../fixtures/test-fixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {

  test('Add product to cart', async ({ page, loggedInPage }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.addBackpackToCart();

    await expect(page.locator('.shopping_cart_badge'))
      .toHaveText('1');

  });


  test('Remove product from cart', async ({ page, loggedInPage }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addBackpackToCart();

    await expect(page.locator('.shopping_cart_badge'))
      .toHaveText('1');

    await productsPage.openCart();

    await expect(cartPage.cartItem)
      .toHaveText('Sauce Labs Backpack');

    await cartPage.removeBackpack();

    await expect(page.locator('.shopping_cart_badge'))
      .not.toBeVisible();

  });

});