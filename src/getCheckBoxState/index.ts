import { promisify } from '../utils';

/**
 * 获取一键登录条款勾选框状态
 *
 * 文档 http://uniapp.dcloud.io/api/plugins/login?id=getCheckBoxState
 */
export const getCheckBoxState = promisify(uni.getCheckBoxState);
