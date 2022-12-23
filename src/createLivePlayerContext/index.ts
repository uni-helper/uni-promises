/**
 * 需要基础库： `1.7.0`
 *
 * 在插件中使用：需要基础库 `1.9.6`
 *
 * 创建 [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) 上下文
 * [LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html)
 * 对象。建议使用
 * [uni.createSelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html)
 * 获取 context 对象。
 *
 * 文档
 * https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html
 */
export const createLivePlayerContext = (livePlayerId: string, componentInstance?: any) =>
  uni.createLivePlayerContext(livePlayerId, componentInstance);
