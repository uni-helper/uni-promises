import { promisify } from '../utils';

/**
 * 将当前画布指定区域的内容导出生成指定大小的图片
 *
 * 文档 https://uniapp.dcloud.net.cn/api/canvas/canvasToTempFilePath.html
 */
export const canvasToTempFilePath = promisify(uni.canvasToTempFilePath);
