export const waitForTelegram = (timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      if (window.Telegram) {
        resolve(window.Telegram);
      } else if (Date.now() - start > timeout) {
        reject(new Error("Telegram object did not load in time"));
      } else {
        setTimeout(check, 50);
      }
    };

    check();
  });
};
