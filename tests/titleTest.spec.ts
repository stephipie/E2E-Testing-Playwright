import { test, expect } from "@playwright/test";

test.describe("Looking for Title", () => {
  test("has title Example Domain", async ({ page }) => {
    await page.goto("https://example.com");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Example Domain");
  });

  test("has title Wikipedia", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Wikipedia");
  });

  test("has Navigation sidebar", async ({ page }) => {
    await page.goto("https://de.wikipedia.org/wiki/Wikipedia:Hauptseite");

    // Expect navigation sidebar to be true
    const navigationSidebar = page.getByTestId("id=mw-panel");
    await expect(navigationSidebar).toBeTruthy();
  });

  test("has Navigationbar", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");

    // Expect navigationbar to be visible
    const navigationSidebar = page.getByText("Englisch");
    await expect(navigationSidebar).toBeVisible();
  });

  // Test if a user is able to login to ( https://www.saucedemo.com/ )

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
  });

  //   Test if search functionality is working on ( https://www.wikipedia.org/ )
  test("search functionality on wikipedia", async ({ page }) => {
    // Navigate to the wikipedia page
    await page.goto("https://www.wikipedia.org/");

    // Fill in search field
    await page.fill("input[name=search]", "Playwright");

    // Click search button
    await page.getByRole("button", { name: "Search" }).click();

   // Wait for search results to load and verify they are visible
   const searchResults = page.locator('.mw-search-results');
   await expect(searchResults).toBeTruthy();

    // Warte, bis die Suchergebnisse geladen sind
    await page.waitForSelector('#firstHeading');

    // Überprüfe, ob die Suchergebnisse geladen wurden
    const heading = await page.textContent('#firstHeading');
    console.log('Suchergebnisse für "Playwright": ${heading}');
  
              

  });                   
  
});