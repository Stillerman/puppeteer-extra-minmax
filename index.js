'use strict'

const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin')

const utils = require('./util')
/**
 * Minimize/Maximize puppeteer pages in real time
 *
 * @example
 * await page.minimize()
 * await page.maximize()
 */
class Plugin extends PuppeteerExtraPlugin {
  constructor(opts = {}) {
    super(opts)
  }

  get name() {
    return 'minmax'
  }

  async minimize() {
      return utils.minimize(this)
  }

  async maximize() {
      return utils.maximize(this)
  }

  async onPageCreated(page) {
      page.minimize = this.minimize.bind(page)
      page.maximize = this.maximize.bind(page)
  }
}

module.exports =  function(pluginConfig) {
  return new Plugin(pluginConfig)
}