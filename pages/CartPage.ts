import { Page, Locator } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly cartItem: Locator;
  readonly removeBackpackButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItem = page.locator('.inventory_item_name');
    this.removeBackpackButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
  }

  async removeBackpack() {
    await this.removeBackpackButton.click();
  }

}