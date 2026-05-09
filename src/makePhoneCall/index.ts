import { promisify } from "../utils";

/**
 * 拨打电话
 *
 * 文档 http://uniapp.dcloud.net.cn/api/system/phone?id=makephonecall
 */
export const makePhoneCall = promisify(uni.makePhoneCall);
