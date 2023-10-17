import { DownloadFilePromise, RequestPromise, UploadFilePromise } from './types';

export function noop() {}

export function promisify<F extends (...args: any) => void>(callback: F) {
  return (...args: Parameters<F>) => {
    type Options = Parameters<F>[0];
    const options = args[0] as Options;
    return new Promise<Parameters<NonNullable<NonNullable<Options>['success']>>[0]>(
      (resolve, reject) => {
        callback({
          ...options,
          success: (result: any) => {
            options?.success?.(result);
            resolve(result);
          },
          fail: (error: any) => {
            options?.fail?.(error);
            reject(error);
          },
        });
      },
    );
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
