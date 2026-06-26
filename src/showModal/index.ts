import { promisify } from "../utils";

/**
 * 显示模态弹窗
 *
 * 文档 https://uniapp.dcloud.net.cn/api/ui/prompt?id=showmodal
 */
export const showModal = promisify(uni.showModal);
