/**
 * 创建 live-pusher 上下文 livePusherContext 对象
 *
 * 文档 http://uniapp.dcloud.io/api/media/camera-context
 */
export const createLivePusherContext = (livePusherId: string, componentInstance?: any) =>
  uni.createLivePusherContext(livePusherId, componentInstance);
