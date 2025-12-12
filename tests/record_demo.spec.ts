import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
  await page.getByRole("link", { name: "How to install Playwright" }).click();
  await page.getByRole("link", { name: "Next Writing tests »" }).click();
});
