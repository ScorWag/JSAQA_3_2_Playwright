const { test, expect } = require("@playwright/test");

import { email, password } from "../user";

/*test("valid authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");

  const emailField = await page.getByPlaceholder("Email");
  await emailField.fill(email);
  const passwordField = await page.getByPlaceholder("Пароль");
  await passwordField.fill(password);
  await page.locator("button[data-testid = 'login-submit-btn']").click();
  await expect(page.locator("h2")).toHaveText("Мои курсы и профессии");
});*/

test("invalid authorization with valid email", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.screenshot({
    path: "screenshots/invalid authorization - valid email/1.jpg",
    fullPage: true,
  });

  const emailField = await page.getByPlaceholder("Email");
  await emailField.fill(email);
  await page.screenshot({
    path: "screenshots/invalid authorization - valid email/2.jpg",
    fullPage: true,
  });
  const passwordField = await page.getByPlaceholder("Пароль");
  await passwordField.fill("parol");
  await page.screenshot({
    path: "screenshots/invalid authorization - valid email/3.jpg",
    fullPage: true,
  });
  await page.locator("button[data-testid = 'login-submit-btn']").click();
  await page.screenshot({
    path: "screenshots/invalid authorization - valid email/4.jpg",
    fullPage: true,
  });
  await expect(page.getByTestId("login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
});

test("invalid authorization with invalid email", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.screenshot({
    path: "screenshots/invalid authorization - invalid email/1.jpg",
    fullPage: true,
  });

  const emailField = await page.getByPlaceholder("Email");
  await emailField.fill("mylo");
  await page.screenshot({
    path: "screenshots/invalid authorization - invalid email/2.jpg",
    fullPage: true,
  });
  const passwordField = await page.getByPlaceholder("Пароль");
  await passwordField.fill("parol");
  await page.screenshot({
    path: "screenshots/invalid authorization - invalid email/3.jpg",
    fullPage: true,
  });
  await page.locator("button[data-testid = 'login-submit-btn']").click();
  await page.screenshot({
    path: "screenshots/invalid authorization - invalid email/4.jpg",
    fullPage: true,
  });
  await expect(page.locator("form[novalidate]>div>span")).toHaveText(
    "Неверный email"
  );
});
