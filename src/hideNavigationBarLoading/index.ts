import { promisify } from "../utils";

/**
 * 隐藏导航条加载动画
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/navigationbar?id=hidenavigationbarloading
 */
export const hideNavigationBarLoading = promisify(uni.hideNavigationBarLoading);
