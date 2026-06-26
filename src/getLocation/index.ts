import { promisify } from "../utils";

/**
 * 获取当前的地理位置、速度
 *
 * 文档 https://uniapp.dcloud.net.cn/api/location/location?id=getlocation
 */
export const getLocation = promisify(uni.getLocation);
