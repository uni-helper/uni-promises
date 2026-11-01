import { promisify } from "../utils";

/**
 * 打开另一个小程序
 *
 * 文档 https://uniapp.dcloud.net.cn/api/other/open-miniprogram?id=navigatetominiprogram
 */
export const navigateToMiniProgram = promisify(uni.navigateToMiniProgram);
