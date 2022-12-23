import { promisify } from '../utils';

/**
 * 选择用户的发票抬头，需要用户授权 scope.invoiceTitle
 *
 * 文档 http://uniapp.dcloud.io/api/other/invoice-title?id=chooseinvoicetitle
 */
export const chooseInvoiceTitle = promisify(uni.chooseInvoiceTitle);
