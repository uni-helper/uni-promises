import { promisify } from '../utils';

/**
 * 开始监听加速度数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/accelerometer.html#startaccelerometer
 */
export const startAccelerometer = promisify(uni.startAccelerometer);
