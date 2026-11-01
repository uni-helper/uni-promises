/**
 * 创建 live-player 上下文 livePlayerContext 对象
 *
 * 建议配合 `uni.createSelectorQuery` 获取 context 对象。
 *
 * 文档 https://uniapp.dcloud.net.cn/api/media/live-player-context.html
 */
export const createLivePlayerContext = (
  livePlayerId: string,
  // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
  componentInstance?: any
) => uni.createLivePlayerContext(livePlayerId, componentInstance);
