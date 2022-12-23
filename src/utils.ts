import { DownloadFilePromise, RequestPromise, SimpleOptions, UploadFilePromise } from './types';

export function promisify<Options extends SimpleOptions = SimpleOptions>(
  callback: (options: Options) => void,
) {
  return function (options: Options) {
    return new Promise<Parameters<NonNullable<Options['success']>>[0]>((resolve, reject) => {
      callback({
        ...options,
        success: (result) => {
          options?.success?.(result);
          resolve(result);
        },
        fail: (error) => {
          options?.fail?.(error);
          reject(error);
        },
      });
    });
  };
}

export function mountTaskMethodToPromise<T = UniApp.GeneralCallbackResult>(
  task?: UniApp.RequestTask | UniApp.UploadTask | UniApp.DownloadTask,
  promise?: RequestPromise<T> | DownloadFilePromise<T> | UploadFilePromise<T>,
) {
  if (!task || !promise) return;
  (
    [
      'onHeadersReceived',
      'offHeadersReceived',
      'onChunkReceived',
      'offChunkReceived',
      'onProgressUpdate',
      'offProgressUpdate',
    ] as const
  ).forEach((fn) => {
    if (fn in task) {
      // @ts-ignore
      promise[fn] = task[fn].bind(task);
    }
  });
  promise.abort = () => {
    task?.abort();
    return promise;
  };
}
