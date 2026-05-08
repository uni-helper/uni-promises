import { promisify } from '../utils';

/**
 * 显示操作菜单
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/prompt?id=showactionsheet
 */
export const showActionSheet = promisify(uni.showActionSheet);
