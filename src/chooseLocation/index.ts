import { promisify } from "../utils";

/**
 * 打开地图选择位置。
 *
 * 文档 http://uniapp.dcloud.net.cn/api/location/location?id=chooselocation
 */
export const chooseLocation = promisify(uni.chooseLocation);
