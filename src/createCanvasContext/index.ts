/**
 * 创建 canvas 绘图上下文
 *
 * 文档 http://uniapp.dcloud.net.cn/api/canvas/createCanvasContext?id=createcanvascontext
 */
export const createCanvasContext = (
  canvasId: string,
  // biome-ignore lint/suspicious/noExplicitAny: Work as expected.
  componentInstance?: any
) => uni.createCanvasContext(canvasId, componentInstance);
