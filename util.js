async function minimize(page) {
    const session = await page.target().createCDPSession();
    const goods = await session.send("Browser.getWindowForTarget");
    const { windowId } = goods;
    await session.send("Browser.setWindowBounds", {
      windowId,
      bounds: { windowState: "minimized" },
    });
  
    return;
  }
  
async function maximize(page) {
    const session = await page.target().createCDPSession();
    const goods = await session.send("Browser.getWindowForTarget");
    const { windowId } = goods;
    await session.send("Browser.setWindowBounds", {
      windowId,
      bounds: { windowState: "normal" },
    });
  }

module.exports = {
  minimize,
  maximize
}