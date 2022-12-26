import { promisify } from '../utils';

/**
 * 使手机发生振动
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/vibrate.html#vibrate
 */
export const vibrate = promisify(uni.vibrate);
