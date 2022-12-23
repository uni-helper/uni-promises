import { promisify } from '../utils';

/**
 * 增加手机通讯录联系人和联系方式
 *
 * 文档 http://uniapp.dcloud.io/api/system/contact?id=addphonecontact
 */
export const addPhoneContact = promisify(uni.addPhoneContact);
