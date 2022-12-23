import { promisify } from '../utils';

/**
 * 显示消息提示框
 *
 * 文档 http://uniapp.dcloud.io/api/ui/prompt?id=showtoast
 */
export const showToast = promisify(uni.showToast);
