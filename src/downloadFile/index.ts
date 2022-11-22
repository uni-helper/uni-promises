import { mountTaskMethodToPromise } from 'src/utils';
import { DownloadFilePromise } from '../types';

export function downloadFile<T = UniApp.DownloadSuccessData>(
  urlOrOptions: string | UniApp.DownloadFileOption,
  options?: UniApp.DownloadFileOption,
) {
  const opt =
    typeof urlOrOptions === 'string'
      ? { ...options, url: urlOrOptions }
      : { ...urlOrOptions, options };
  const { success: optSuccess, fail: optFail } = opt;

  let task: UniApp.DownloadTask | undefined = undefined;
  const promise: DownloadFilePromise<T> = new Promise((resolve, reject) => {
    opt.success = (r) => {
      if (optSuccess) optSuccess(r);
      resolve(r);
    };
    opt.fail = (e) => {
      if (optFail) optFail(e);
      reject(e);
    };
    task = uni.downloadFile(opt);
  }) as unknown as DownloadFilePromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
