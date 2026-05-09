import { promisify } from "../utils";

/**
 * 压缩视频
 *
 * 文档 http://uniapp.dcloud.net.cn/api/media/video?id=getvideoinfo
 */
export const getVideoInfo = promisify(uni.getVideoInfo);
