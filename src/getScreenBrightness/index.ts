import { promisify } from '../utils';

/**
 * 获取屏幕亮度
 *
 * 文档 http://uniapp.dcloud.io/api/system/brightness?id=getscreenbrightness
 */
export const getScreenBrightness = promisify(uni.getScreenBrightness);
