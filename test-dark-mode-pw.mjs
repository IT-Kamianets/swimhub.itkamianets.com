#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const screenshotsDir = '/tmp/dark-mode-test';
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.createBrowserContext();
  const page = await context.newPage();

  try {
    console.log('📱 Loading app at http://localhost:4200...');
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });

    // Wait for Angular to bootstrap
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);

    // Screenshot light mode
    console.log('📸 Taking screenshot of light mode...');
    await page.screenshot({ path: `${screenshotsDir}/01-light-mode.png`, fullPage: true });

    // Check current data-mode attribute
    let dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
    console.log(`   Current data-mode: "${dataMode}"`);

    // Check CSS variables in light mode
    const lightCssVars = await page.evaluate(() => {
      const root = document.documentElement;
      return {
        colorScheme: getComputedStyle(root).colorScheme,
        bgPrimary: getComputedStyle(root).getPropertyValue('--c-bg-primary').trim(),
        bgSecondary: getComputedStyle(root).getPropertyValue('--c-bg-secondary').trim(),
        textPrimary: getComputedStyle(root).getPropertyValue('--c-text-primary').trim(),
      };
    });
    console.log('   Light mode CSS:', lightCssVars);

    // Get the toggle button
    const toggleButton = await page.$('button[aria-label*="Switch"]');
    if (!toggleButton) {
      console.error('❌ ERROR: Dark mode toggle button not found!');
      console.log('Looking for buttons with aria-label containing "Switch"...');
      const buttons = await page.$$('button');
      for (let btn of buttons) {
        const ariaLabel = await btn.getAttribute('aria-label');
        console.log(`  - Button aria-label: "${ariaLabel}"`);
      }
    } else {
      console.log('✅ Found dark mode toggle button');

      // Click it to switch to dark mode
      console.log('🔘 Clicking dark mode toggle...');
      await toggleButton.click();

      // Wait for the change to apply
      await page.waitForTimeout(800);

      // Check new data-mode attribute
      dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
      console.log(`   New data-mode: "${dataMode}"`);

      // Check CSS variables in dark mode
      const darkCssVars = await page.evaluate(() => {
        const root = document.documentElement;
        return {
          colorScheme: getComputedStyle(root).colorScheme,
          bgPrimary: getComputedStyle(root).getPropertyValue('--c-bg-primary').trim(),
          bgSecondary: getComputedStyle(root).getPropertyValue('--c-bg-secondary').trim(),
          textPrimary: getComputedStyle(root).getPropertyValue('--c-text-primary').trim(),
        };
      });
      console.log('   Dark mode CSS:', darkCssVars);

      // Screenshot dark mode
      console.log('📸 Taking screenshot of dark mode...');
      await page.screenshot({ path: `${screenshotsDir}/02-dark-mode.png`, fullPage: true });

      // Verify the CSS variables actually changed
      const cssChanged = JSON.stringify(lightCssVars) !== JSON.stringify(darkCssVars);
      if (cssChanged) {
        console.log('✅ CSS variables changed correctly');
      } else {
        console.log('❌ ERROR: CSS variables did not change!');
      }

      // Verify data-mode changed
      if (dataMode === 'dark') {
        console.log('✅ data-mode attribute changed to "dark"');
      } else {
        console.log(`❌ ERROR: data-mode is "${dataMode}", expected "dark"`);
      }

      // Toggle back to light mode
      console.log('🔘 Clicking toggle again to switch back to light mode...');
      await toggleButton.click();
      await page.waitForTimeout(800);

      dataMode = await page.evaluate(() => document.documentElement.getAttribute('data-mode'));
      console.log(`   Data-mode after toggle back: "${dataMode}"`);

      if (dataMode === 'light') {
        console.log('✅ Toggled back to light mode successfully');
      } else {
        console.log(`❌ ERROR: Failed to toggle back, data-mode is "${dataMode}"`);
      }

      // Screenshot light mode again
      console.log('📸 Taking final screenshot...');
      await page.screenshot({ path: `${screenshotsDir}/03-light-mode-final.png`, fullPage: true });

      console.log(`\n✅ Test completed!`);
      console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
    }
  } catch (error) {
    console.error('❌ ERROR during test:', error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }
}

main();
