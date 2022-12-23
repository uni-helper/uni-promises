import { promisify } from '../utils';

/**
 * 获取设备内是否录入指纹等生物信息
 *
 * 文档 http://uniapp.dcloud.io/api/system/authentication?id=checkissoterenrolledindevice
 */
export const checkIsSoterEnrolledInDevice = promisify(uni.checkIsSoterEnrolledInDevice);
