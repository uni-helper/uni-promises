import { promisify } from '../utils';
/**
 * 设置是否打开调试开关
 *
 * 此开关对正式版也能生效
 *
 * 文档 http://uniapp.dcloud.io/api/other/set-enable-debug?id=setenabledebug
 */
export const setEnableDebug = promisify(uni.setEnableDebug);
