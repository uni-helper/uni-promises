import { mountTaskMethodToPromise, noop } from '../utils';
import { UploadFilePromise } from '../types';

/**
 * 上传文件
 *
 * 文档 http://uniapp.dcloud.io/api/request/network-file?id=uploadfile
 */
export function uploadFile<T = UniApp.UploadFileSuccessCallbackResult>(
  urlOrOptions: string | UniApp.UploadFileOption,
  options?: UniApp.UploadFileOption,
) {
  const _options =
    typeof urlOrOptions === 'string'
      ? { ...options, url: urlOrOptions, complete: options?.complete ?? noop }
      : {
          ...urlOrOptions,
          ...options,
          complete: urlOrOptions?.complete ?? options?.complete ?? noop,
        };
  const { success, fail } = _options;

  let task: UniApp.UploadTask | undefined;
  const promise: UploadFilePromise<T> = new Promise((resolve, reject) => {
    _options.success = (r) => {
      success?.(r);
      resolve(r);
    };
    _options.fail = (e) => {
      fail?.(e);
      reject(e);
    };
    task = uni.uploadFile(_options);
  }) as unknown as UploadFilePromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
