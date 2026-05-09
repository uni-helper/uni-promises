/**
 * 创建 live-pusher 上下文 livePusherContext 对象
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/camera-context
 */
export const createLivePusherContext = (
  livePusherId: string,
  // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
  componentInstance?: any
) => uni.createLivePusherContext(livePusherId, componentInstance);
