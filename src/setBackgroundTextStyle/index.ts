import { promisify } from "../utils";

/**
 * 动态设置下拉背景字体、loading 图的样式
 *
 * 文档 https://uniapp.dcloud.net.cn/api/ui/bgcolor?id=setbackgroundtextstyle
 */
export const setBackgroundTextStyle = promisify(uni.setBackgroundTextStyle);
