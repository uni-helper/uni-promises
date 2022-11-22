export interface SimpleOptions {
  success?: (result: any) => void;
  fail?: (error: any) => void;
}

export function simplePromisify<Options extends SimpleOptions = SimpleOptions>(
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
