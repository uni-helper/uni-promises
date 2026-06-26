import { promisify } from "../utils";

/**
 * 拨打电话
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/phone?id=makephonecall
 */
export const makePhoneCall = promisify(uni.makePhoneCall);
