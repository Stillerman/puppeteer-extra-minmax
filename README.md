# Minimize and Maximize Puppeteer Browsers!
> This is a plugin for [puppeteer-extra](https://github.com/berstend/puppeteer-extra) that allows you to minimize and maximize puppeteer browsers in real time.

### Install

```bash
yarn add puppeteer-extra-minmax
```

### Usage

```js
const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-minmax")());

async function test() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.minimize();
  await page.maximize();

  await browser.close();
  console.log("all done");
}

test();
```

The key lines here are `page.minimize()` and `page.maximize()`. These minimize and maximize the page respectively.