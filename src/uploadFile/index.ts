import { mountTaskMethodToPromise } from 'src/utils';
import { UploadFilePromise } from '../types';

export function uploadFile<T = UniApp.UploadFileSuccessCallbackResult>(
  urlOrOptions: string | UniApp.UploadFileOption,
  options?: UniApp.UploadFileOption,
) {
  const opt =
    typeof urlOrOptions === 'string'
      ? { ...options, url: urlOrOptions }
      : { ...urlOrOptions, options };
  const { success: optSuccess, fail: optFail } = opt;

  let task: UniApp.UploadTask | undefined = undefined;
  const promise: UploadFilePromise<T> = new Promise((resolve, reject) => {
    opt.success = (r) => {
      if (optSuccess) optSuccess(r);
      resolve(r);
    };
    opt.fail = (e) => {
      if (optFail) optFail(e);
      reject(e);
    };
    task = uni.uploadFile(opt);
  }) as unknown as UploadFilePromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
