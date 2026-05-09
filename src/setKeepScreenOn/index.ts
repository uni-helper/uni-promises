import { promisify } from "../utils";

/**
 * 设置是否保持常亮状态
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/brightness?id=setkeepscreenon
 */
export const setKeepScreenOn = promisify(uni.setKeepScreenOn);
