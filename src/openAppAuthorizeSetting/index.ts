import { promisify } from "../utils";

/**
 * 跳转系统授权管理页
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/openappauthorizesetting
 */
export const openAppAuthorizeSetting = promisify(uni.openAppAuthorizeSetting);
