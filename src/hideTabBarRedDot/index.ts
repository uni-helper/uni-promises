import { promisify } from "../utils";

/**
 * 隐藏 TabBar 某一项的右上角的红点
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/tabbar?id=hidetabbarreddot
 */
export const hideTabBarRedDot = promisify(uni.hideTabBarRedDot);
