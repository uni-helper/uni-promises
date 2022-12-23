import { promisify } from '../utils';

/**
 * 需要基础库： `2.3.0`
 *
 * 在插件中使用：需要基础库 `2.16.1`
 *
 * 选择用户已有的发票。
 *
 * 通过 cardId 和 encryptCode 获得报销发票的信息。
 *
 * 请参考 [微信电子发票文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U)
 * 中，「查询报销发票信息」部分。
 *
 * 其中 `access_token` 的获取请参考
 * [auth.getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)
 * 文档
 *
 * 文档 https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html
 */
export const chooseInvoice = promisify(uni.chooseInvoice);
