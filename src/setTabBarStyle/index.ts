import { promisify } from "../utils";

/**
 * 动态设置 TabBar 的整体样式
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbarstyle
 */
export const setTabBarStyle = promisify(uni.setTabBarStyle);
