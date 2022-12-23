import { promisify } from '../utils';

/**
 * 新开页面打开文档，支持格式 doc、xls、ppt、pdf、docx、xlsx、pptx
 *
 * 文档 http://uniapp.dcloud.io/api/file/file?id=opendocument
 */
export const openDocument = promisify(uni.openDocument);
