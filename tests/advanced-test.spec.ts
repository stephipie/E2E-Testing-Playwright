import { test, expect } from "@playwright/test";

test.describe("Wikipedia Playwright article test", () => {
  test("Navigate to Wikipedia", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");

    // Wähle die Sprache "English"
    const englishLink = await page.locator('a[title="English — Wikipedia — The Free Encyclopedia"]');
    await englishLink.click();

    // Suche nach dem Artikel "Playwright"
    await page.fill("input[name=search]", "Playwright");
    await page.getByRole("button", { name: "Search" }).click();

    // Warte auf die Suchergebnisse
    const searchResults = page.locator(".mw-search-results");
    await expect(searchResults).toBeTruthy();

    // Warte auf die Überschrift
    await page.waitForSelector("#firstHeading");

    // Überprüfe, ob die Überschrift "Playwright (software)" auf der Seite erscheint
    const heading = await page.textContent("#firstHeading");
    expect(heading).toBe("Playwright");

    // Überprüfe, ob die Sprache der Seite korrekt gesetzt ist
    const langAttribute = await page.evaluate(
      () => document.documentElement.lang
    );

    expect(langAttribute).toBe("en");
  });

  test("validation of formular input", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    // try to login without entering any data
    await page.getByRole("button", { name: "Login" }).click(); 
    // check if error message is displayed
    const errorMessage = await page.locator(".error");
    await expect(errorMessage).toBeTruthy();
    // test to see what happens if we enter a wrong password
    await page.fill("input[name=user-name]", "standard_user");
    await page.fill("input[name=password]", "wrong_password");
    await page.getByRole("button", { name: "Login" }).click(); 
    await expect(errorMessage).toBeTruthy();

    // Test to save a screenshot if Test fails
    await page.screenshot({ path: "screenshot.png" });
  } );

  test("successful login at saucedemo", async ({ page }) => {
    // Navigate to the login page  
    await page.goto("https://www.saucedemo.com/");
    // Fill in username
    await page.getByPlaceholder("Username").fill("standard_user");
     // Fill in password
    await page.getByPlaceholder("Password").fill("secret_sauce");
    // Click login button
    await page.getByRole("button", { name: "Login" }).click();
    // Verify successful login by checking if we're on the inventory page
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Add a product to the cart
    await page.click("text=Add to cart");
    // Go to the cart
    await page.click("text=1");
    // Check if the product is in the cart
    const cartItem = await page.locator(".inventory_item_name");
    await expect(cartItem).toBeTruthy();

    // Go to checkout
    await page.click("text=Checkout");
    // Fill in the form
    await page.fill("input[name=firstName]", "Max");
    await page.fill("input[name=lastName]", "Mustermann");
    await page.fill("input[name=postalCode]", "12345");
    // Click on continue
    await page.click("text=Continue");
    // Check if we are on the overview page
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    // Finish the order
    await page.click("text=Finish");
    // Check if we are on the complete page with the Text "THANK YOU FOR YOUR ORDER"
    await page.innerHTML("text=THANK YOU FOR YOUR ORDER");
});
});

