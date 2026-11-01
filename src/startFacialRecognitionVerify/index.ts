import { promisify } from "../utils";

/**
 * 实人认证
 *
 * 文档 https://uniapp.dcloud.net.cn/api/plugins/facialRecognitionVerify.html#startfacialrecognitionverify, https://doc.dcloud.net.cn/uniCloud/frv/dev.html#start-frv
 */
export const startFacialRecognitionVerify = promisify(
  uni.startFacialRecognitionVerify
);
