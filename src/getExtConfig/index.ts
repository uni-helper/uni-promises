import { promisify } from "../utils";

/**
 * 获取第三方平台自定义的数据字段
 *
 * 文档 http://uniapp.dcloud.net.cn/api/other/get-extconfig?id=getextconfig
 */
export const getExtConfig = promisify(uni.getExtConfig);
