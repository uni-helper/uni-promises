import { promisify } from "../utils";

/**
 * 获取输入框的光标位置
 *
 * 文档 https://uniapp.dcloud.net.cn/api/key?id=getselectedtextrange
 */
export const getSelectedTextRange = promisify(uni.getSelectedTextRange);
