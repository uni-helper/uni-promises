import { promisify } from "../utils";

/**
 * 从客户端会话选择文件
 *
 * 微信小程序需基础库 `2.5.0`，插件内不支持使用。
 *
 * 返回的 `tempFiles` 里每一项的 `tempFilePath` 可以直接作为 `img` 的 `src` 使用。
 *
 * 文档 https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html
 */
export const chooseMessageFile = promisify(uni.chooseMessageFile);
