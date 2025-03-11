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
});
