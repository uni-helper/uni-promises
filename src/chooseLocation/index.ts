import { promisify } from '../utils';

/**
 * 打开地图选择位置。
 *
 * 文档 http://uniapp.dcloud.io/api/location/location?id=chooselocation
 */
export const chooseLocation = promisify(uni.chooseLocation);
