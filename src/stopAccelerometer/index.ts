import { promisify } from '../utils';

/**
 * 停止监听加速度数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/accelerometer.html#stopaccelerometer
 */
export const stopAccelerometer = promisify(uni.stopAccelerometer);
