import { promisify } from '../utils';

/**
 * 显示模态弹窗
 *
 * 文档 http://uniapp.dcloud.io/api/ui/prompt?id=showmodal
 */
export const showModal = promisify(uni.showModal);
