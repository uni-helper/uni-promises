import { mountTaskMethodToPromise } from 'src/utils';
import { RequestPromise } from '../types';

export function request<T = UniApp.RequestSuccessCallbackResult>(
  urlOrOptions: string | UniApp.RequestOptions,
  options?: UniApp.RequestOptions,
) {
  const opt =
    typeof urlOrOptions === 'string'
      ? { ...options, url: urlOrOptions }
      : { ...urlOrOptions, options };
  const { success: optSuccess, fail: optFail } = opt;

  let task: UniApp.RequestTask | undefined = undefined;
  const promise: RequestPromise<T> = new Promise((resolve, reject) => {
    opt.success = (r) => {
      if (optSuccess) optSuccess(r);
      resolve(r);
    };
    opt.fail = (e) => {
      if (optFail) optFail(e);
      reject(e);
    };
    task = uni.request(opt);
  }) as unknown as RequestPromise<T>;

  mountTaskMethodToPromise<T>(task, promise);

  return promise;
}
