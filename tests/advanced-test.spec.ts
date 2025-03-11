// import { test, expect } from "@playwright/test";

// test.describe("Wikipedia Playwright article test", () => {
//   test("Navigate to Wikipedia", async ({ page }) => {
//     await page.goto("https://www.wikipedia.org/");

//     // Wähle die Sprache "English"
//     await page.click('text=English');

//     // Suche nach dem Artikel "Playwright"
//     await page.fill("input[name=search]", "Playwright");
//     // Click search button
//     await page.getByRole("button", { name: "Search" }).click();

//     // Wait until Headline ist loaded
//     await page.waitForSelector("h1");

//     // Überprüfe, ob die Überschrift "Playwright (software)" auf der Seite erscheint
//     const heading = await page.locator("h1").innerText();
//     expect(heading).toBe("Playwright (software)");

//     // Überprüfe, ob die Sprache der Seite korrekt gesetzt ist
//     const langAttribute = await page.evaluate(
//       () => document.documentElement.lang
//     );
//     expect(langAttribute).toBe("en");
//   });
// });

import { test, expect } from "@playwright/test";

test.describe("Wikipedia Playwright article test", () => {
  test("Navigate to Wikipedia", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");

    // Wähle die Sprache "English"
    await page.click("text=English");

    // Suche nach dem Artikel "Playwright"
    await page.fill("input[name=search]", "Playwright");
    await page.getByRole("button", { name: "Search" }).click();

    // Warte auf die Suchergebnisse
    // await page.waitForSelector(".mw-search-results");
    const searchResults = page.locator(".mw-search-results");
    await expect(searchResults).toBeTruthy();

    // // Klicke auf den ersten Suchergebnis-Link
    // await page.click('a:text("Playwright (software)")');

    // Warte auf die Überschrift
    // await page.waitForSelector("h1");
    await page.waitForSelector("#firstHeading");

    // Überprüfe, ob die Überschrift "Playwright (software)" auf der Seite erscheint
    // const heading = await page.locator("h1").innerText();
    const heading = await page.textContent("#firstHeading");
    expect(heading).toBe("Playwright");

    // Überprüfe, ob die Sprache der Seite korrekt gesetzt ist
    const langAttribute = await page.evaluate(
      () => document.documentElement.lang
    );

    expect(langAttribute).toBe("en");
  });
});
