import { mountTaskMethodToPromise } from 'src/utils';
import { DownloadFilePromise } from '../types';

/**
 * 下载文件
 *
 * 文档 http://uniapp.dcloud.io/api/request/network-file?id=downloadfile
 */
export function downloadFile<T = UniApp.DownloadSuccessData>(
  urlOrOptions: string | UniApp.DownloadFileOption,
  options?: UniApp.DownloadFileOption,
) {
  const _options =
    typeof urlOrOptions === 'string'
      ? { ...options, url: urlOrOptions }
      : { ...urlOrOptions, options };
  const { success, fail } = _options;

  let task: UniApp.DownloadTask | undefined = undefined;
  const promise: DownloadFilePromise<T> = new Promise((resolve, reject) => {
    _options.success = (r) => {
      success?.(r);
      resolve(r);
    };
    _options.fail = (e) => {
      fail?.(e);
      reject(e);
    };
    task = uni.downloadFile(_options);
  }) as unknown as DownloadFilePromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
