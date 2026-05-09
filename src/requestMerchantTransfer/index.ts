import { promisify } from '../utils';

/**
 * 商户转账
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/request-merchant-transfer.html
 */
export const requestMerchantTransfer = promisify(uni.requestMerchantTransfer);
