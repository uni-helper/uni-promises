import { promisify } from '../utils';

/**
 * 显示分享按钮
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/share?id=showsharemenu
 */
export const showShareMenu = promisify(uni.showShareMenu);
