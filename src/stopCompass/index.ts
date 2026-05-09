import { promisify } from '../utils';

/**
 * 停止监听罗盘数据
 *
 * 文档 https://uniapp.dcloud.net.cn/api/system/compass.html#stopcompass
 */
export const stopCompass = promisify(uni.stopCompass);
