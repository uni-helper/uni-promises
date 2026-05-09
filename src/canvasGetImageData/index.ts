import { promisify } from "../utils";

/**
 * 获取 canvas 区域隐含的像素数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/canvas/canvasGetImageData.html
 */
export const canvasGetImageData = promisify(uni.canvasGetImageData);
