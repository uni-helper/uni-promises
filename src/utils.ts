import { DownloadFilePromise, RequestPromise, SimpleOptions, UploadFilePromise } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

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
  for (const fn of [
    'onHeadersReceived',
    'offHeadersReceived',
    'onChunkReceived',
    'offChunkReceived',
    'onProgressUpdate',
    'offProgressUpdate',
  ] as const) {
    if (fn in task) {
      // @ts-expect-error no types
      promise[fn] = task[fn].bind(task);
    }
  }
  promise.abort = () => {
    task?.abort();
    return promise;
  };
}
