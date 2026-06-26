import { promisify } from "../utils";

/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果
 *
 * 文档 https://uniapp.dcloud.net.cn/api/other/authorize?id=opensetting
 */
export const openSetting = promisify(uni.openSetting);
