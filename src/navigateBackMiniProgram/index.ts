import { promisify } from '../utils';

/**
 * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功
 *
 * 文档 http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatebackminiprogram
 */
export const navigateBackMiniProgram = promisify(uni.navigateBackMiniProgram);
