const _getApp = () =>
  new Promise<ReturnType<typeof getApp>>((resolve, reject) => {
    try {
      const app = getApp();
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });

export { _getApp as getApp };
