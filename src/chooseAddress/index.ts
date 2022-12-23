import { promisify } from '../utils';

/**
 * 获取用户收货地址
 *
 * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address
 *
 * 文档 http://uniapp.dcloud.io/api/other/choose-address?id=chooseaddress
 */
export const chooseAddress = promisify(uni.chooseAddress);
