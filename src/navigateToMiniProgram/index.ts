import { promisify } from '../utils';

/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果
 *
 * 文档 http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatetominiprogram
 */
export const navigateToMiniProgram = promisify(uni.navigateToMiniProgram);
