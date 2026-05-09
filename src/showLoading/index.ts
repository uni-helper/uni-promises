import { promisify } from "../utils";

/**
 * 显示 loading 提示框
 *
 * 文档 http://uniapp.dcloud.net.cn/api/ui/prompt?id=showloading
 */
export const showLoading = promisify(uni.showLoading);
