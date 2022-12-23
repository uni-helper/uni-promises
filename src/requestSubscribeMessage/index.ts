import { promisify } from '../utils';

/**
 * 需要基础库： `2.4.4`
 *
 * 在插件中使用：不支持
 *
 * 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过
 * [uni.getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
 * 接口可获取用户对相关模板消息的订阅状态。
 *
 * ## 注意事项
 *
 * - 一次性模板 id 和永久模板 id 不可同时使用。
 * - 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
 * - [2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
 *   版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
 * - [2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
 *   版本开始，开发版和体验版小程序将禁止使用模板消息 formId。
 * - 一次授权调用里，每个tmplId对应的模板标题不能存在相同的，若出现相同的，只保留一个。
 * - [2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
 *   版本开始，支持订阅语音消息提醒，[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)
 *
 * **错误码**
 *
 * | errCode | errMsg                                                 | 说明                                                           |
 * | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
 * | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
 * | 10002   | Request list fail                                      | 网络问题，请求消息列表失败                                     |
 * | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
 * | 10004   | Invalid template id                                    | 参数类型错误                                                   |
 * | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小程序这个时候退后台了导致的                |
 * | 20001   | No template data return, verify the template id exist  | 没有模板数据，一般是模板 ID 不存在 或者和模板类型不对应 导致的 |
 * | 20002   | Templates type must be same                            | 模板消息类型 既有一次性的又有永久的                            |
 * | 20003   | Templates count out of max bounds                      | 模板消息数量超过上限                                           |
 * | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
 * | 20005   | This mini program was banned from subscribing messages | 小程序被禁封                                                   |
 * | 20013   | Reject DeviceMsg Template                              | 不允许通过该接口订阅设备消息                                   |
 *
 * 文档
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html
 */
export const requestSubscribeMessage = promisify(uni.requestSubscribeMessage);
