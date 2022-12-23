import { promisify } from '../utils';

/**
 * 获取用户的当前设置
 *
 * 文档 http://uniapp.dcloud.io/api/other/setting?id=getsetting
 */
export const getSetting = promisify(uni.getSetting);
