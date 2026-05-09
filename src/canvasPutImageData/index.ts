import { promisify } from "../utils";

/**
 * 将像素数据绘制到画布
 *
 * 文档 https://uniapp.dcloud.net.cn/api/canvas/canvasPutImageData.html
 */
export const canvasPutImageData = promisify(uni.canvasPutImageData);
