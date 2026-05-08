import { promisify } from '../utils';

/**
 * 动态设置窗口的背景色
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/bgcolor?id=setbackgroundcolor
 */
export const setBackgroundColor = promisify(uni.setBackgroundColor);
