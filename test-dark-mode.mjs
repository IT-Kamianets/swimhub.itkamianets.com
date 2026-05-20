import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const screenshotsDir = '/tmp/dark-mode-screenshots';
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Loading app at http://localhost:4200...');
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });

    // Screenshot light mode
    console.log('Taking screenshot of light mode...');
    await page.screenshot({ path: `${screenshotsDir}/01-light-mode.png`, fullPage: true });

    // Check current data-mode attribute
    let dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
    console.log(`Current data-mode: "${dataMode}"`);

    // Get the toggle button
    const toggleButton = await page.$('button[aria-label*="Switch"]');
    if (!toggleButton) {
      console.error('ERROR: Dark mode toggle button not found!');
    } else {
      console.log('Found dark mode toggle button');

      // Click it to switch to dark mode
      console.log('Clicking dark mode toggle...');
      await toggleButton.click();

      // Wait a bit for the change to apply
      await page.waitForTimeout(500);

      // Check new data-mode attribute
      dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
      console.log(`New data-mode after click: "${dataMode}"`);

      // Screenshot dark mode
      console.log('Taking screenshot of dark mode...');
      await page.screenshot({ path: `${screenshotsDir}/02-dark-mode.png`, fullPage: true });

      // Verify the CSS variables changed
      const cssVars = await page.evaluate(() => {
        const root = document.documentElement;
        return {
          'colorScheme': getComputedStyle(root).colorScheme,
          '--c-bg-primary': getComputedStyle(root).getPropertyValue('--c-bg-primary'),
          '--c-bg-secondary': getComputedStyle(root).getPropertyValue('--c-bg-secondary'),
          '--c-text-primary': getComputedStyle(root).getPropertyValue('--c-text-primary'),
        };
      });
      console.log('CSS Variables in dark mode:', cssVars);

      // Toggle back to light mode
      console.log('Clicking toggle again to switch back to light mode...');
      await toggleButton.click();
      await page.waitForTimeout(500);

      dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
      console.log(`Data-mode after second click: "${dataMode}"`);

      // Screenshot light mode again
      console.log('Taking final screenshot...');
      await page.screenshot({ path: `${screenshotsDir}/03-light-mode-final.png`, fullPage: true });

      console.log(`\n✅ Test completed successfully!`);
      console.log(`Screenshots saved to: ${screenshotsDir}`);
    }
  } catch (error) {
    console.error('ERROR during test:', error);
  } finally {
    await browser.close();
  }
})();
