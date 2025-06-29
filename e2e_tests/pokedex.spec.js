const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
    console.log('Current URL:', page.url());
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be navigated to', async ({ page }) => {
    await page.getByText('ivysaur').click()
    console.log('Current URL:', page.url());
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})