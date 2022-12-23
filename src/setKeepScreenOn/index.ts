import { promisify } from '../utils';

/**
 * 设置是否保持常亮状态
 *
 * 文档 http://uniapp.dcloud.io/api/system/brightness?id=setkeepscreenon
 */
export const setKeepScreenOn = promisify(uni.setKeepScreenOn);
