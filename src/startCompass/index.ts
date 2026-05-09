import { promisify } from '../utils';

/**
 * 开始监听罗盘数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/compass.html#startcompass
 */
export const startCompass = promisify(uni.startCompass);
