import { promisify } from "../utils";

/**
 * 选择用户已有的发票
 *
 * 微信小程序需基础库 `2.3.0`，插件内使用需基础库 `2.16.1`。
 *
 * 返回的 `invoiceInfo` 是 JSON 字符串，包含 `card_id`、`encrypt_code`、`app_id`，
 * 报销方可用 `cardId` 和 `encryptCode` 换开票信息。
 *
 * 文档 https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html
 */
export const chooseInvoice = promisify(uni.chooseInvoice);
