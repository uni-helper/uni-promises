import { promisify } from '../utils';

/**
 * 开启小程序进入前台时接收位置消息
 *
 * 文档 https://uniapp.dcloud.net.cn/api/location/location-change.html#startlocationupdate
 */
export const startLocationUpdate = promisify(uni.startLocationUpdate);
