import { promisify } from '../utils';

/**
 * 设置屏幕亮度
 *
 * 文档 http://uniapp.dcloud.io/api/system/brightness?id=setscreenbrightness
 */
export const setScreenBrightness = promisify(uni.setScreenBrightness);
