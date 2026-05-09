import { promisify } from "../utils";

/**
 * 隐藏返回首页按钮
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/navigationbar?id=hidehomebutton
 */
export const hideHomeButton = promisify(uni.hideHomeButton);
