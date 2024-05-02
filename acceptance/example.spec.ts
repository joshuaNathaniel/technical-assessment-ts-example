import { test, expect } from '@playwright/test';

test('As a user, I want to visit the application, so that I can see the greeting, "Hello, World!"', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(await page.getByText('Hello, World!').nth(0)).toBeVisible();
});
