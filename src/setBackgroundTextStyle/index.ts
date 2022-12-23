import { promisify } from '../utils';

/**
 * 动态设置窗口的背景色
 *
 * 文档 http://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundtextstyle
 */
export const setBackgroundTextStyle = promisify(uni.setBackgroundTextStyle);
