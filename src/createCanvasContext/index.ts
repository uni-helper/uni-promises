/**
 * 创建 canvas 绘图上下文
 *
 * 文档 http://uniapp.dcloud.net.cn/api/canvas/createCanvasContext?id=createcanvascontext
 */
export const createCanvasContext = (canvasId: string, componentInstance?: any) =>
  uni.createCanvasContext(canvasId, componentInstance);
