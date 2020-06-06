'use strict'

const puppeteer = require('puppeteer-extra')
puppeteer.use(require('./')())

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
await page.minimize()
await  page.maximize()
await browser.close()
  console.log('all done')
})()