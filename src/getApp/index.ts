const _getApp = () =>
  new Promise((resolve, reject) => {
    try {
      const app = getApp();
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });

export { _getApp as getApp };
