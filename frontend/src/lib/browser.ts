export const openSidePanel = async () => {
  try {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab?.id) {
      await browser.sidePanel.open({ tabId: tab.id });
      // 只有在 Popup 环境下才执行关闭
      if (typeof window !== 'undefined' && window.close) {
        window.close();
      }
    }
  } catch (error) {
    console.error('SidePanel 唤起失败:', error);
  }
};
