import { promisify } from '../utils';

/**
 * 需要基础库： `2.5.0`
 *
 * 在插件中使用：不支持
 *
 * 从客户端会话选择文件。
 *
 * ```js
 * wx.chooseMessageFile({
 *   count: 10,
 *   type: 'image',
 *   success(res) {
 *     // tempFilePath可以作为img标签的src属性显示图片
 *     const tempFilePaths = res.tempFiles;
 *   },
 * });
 * ```
 *
 * 文档 https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html
 */
export const chooseMessageFile = promisify(uni.chooseMessageFile);
