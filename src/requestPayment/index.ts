import { promisify } from '../utils';

/**
 * 支付
 *
 * 文档 http://uniapp.dcloud.net.cn/api/plugins/payment?id=requestpayment
 */
export const requestPayment = promisify(uni.requestPayment);
