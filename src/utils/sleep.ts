export const sleep = (timeout: number) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      try {
        res(undefined);
      } catch (error) {
        rej(error);
      }
    }, timeout)
  );
