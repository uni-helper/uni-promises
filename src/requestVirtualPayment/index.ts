import { promisify } from '../utils';

/**
 * 虚拟支付
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/virtualPayment.html
 */
export const requestVirtualPayment = promisify(uni.requestVirtualPayment);
