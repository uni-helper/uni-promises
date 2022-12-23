import { promisify } from '../utils';

/**
 * 调用系统分享
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem
 */
export const shareWithSystem = promisify(uni.shareWithSystem);
