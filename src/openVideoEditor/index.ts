import { promisify } from "../utils";

/**
 * 打开视频编辑器
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/video?id=openvideoeditor
 */
export const openVideoEditor = promisify(uni.openVideoEditor);
