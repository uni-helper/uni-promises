import { promisify } from "../utils";

/**
 * 显示分享按钮
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/share?id=showsharemenu
 */
export const showShareMenu = promisify(uni.showShareMenu);
