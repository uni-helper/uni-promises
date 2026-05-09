import { promisify } from "../utils";

/**
 * 使手机发生较长时间的振动（400ms）
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/vibrate?id=vibratelong
 */
export const vibrateLong = promisify(uni.vibrateLong);
