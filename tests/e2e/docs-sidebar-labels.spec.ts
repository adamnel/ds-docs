import { expect, test } from "@playwright/test";

test.describe("docs sidebar labels", () => {
  test("section nav links show page titles (not empty)", async ({ page }) => {
    await page.goto("/docs/foundations/color");
    await page.waitForLoadState("networkidle");

    const activeLinks = await page.evaluate(() => {
      const panel = document.querySelector(
        '[role="tabpanel"][data-state="active"]'
      );
      if (!panel) return [];
      return Array.from(panel.querySelectorAll("a[href]")).map((a) =>
        (a as HTMLElement).innerText.trim()
      );
    });

    expect(activeLinks.length).toBeGreaterThan(0);
    for (const text of activeLinks) {
      expect(text.length, "link label should not be empty").toBeGreaterThan(0);
    }
  });
});
