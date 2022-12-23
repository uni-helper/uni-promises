import { promisify } from '../utils';

/**
 * 设置系统剪贴板的内容
 *
 * 文档 http://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata
 */
export const setClipboardData = promisify(uni.setClipboardData);
