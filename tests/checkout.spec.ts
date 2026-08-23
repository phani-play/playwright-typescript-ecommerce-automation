import { test, expect } from '../fixtures/test-fixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete checkout successfully', async ({ page, loggedInPage }) => {

  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Add product
  await productsPage.addBackpackToCart();

  // Open cart
  await productsPage.openCart();

  // Start checkout
  await checkoutPage.startCheckout();

  // Enter customer information
  await checkoutPage.enterCustomerInformation(
    'Phani',
    'Kumar',
    '506001'
  );

  // Continue to checkout overview
  await checkoutPage.continueToOverview();

  // Verify checkout overview
  await expect(checkoutPage.overviewTitle)
    .toHaveText('Checkout: Overview');

  // Finish order
  await checkoutPage.finishOrder();

  // Verify successful order
  await expect(checkoutPage.successMessage)
    .toHaveText('Thank you for your order!');

});