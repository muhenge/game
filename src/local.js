export const localStorageModule = () => {
  const storeUid = (uid) => {
    localStorage.setItem('key', JSON.stringify({ uid }));
  };

  const getUid = () => {
    const uid = localStorage.getItem('key');
    if (uid) {
      return JSON.parse(uid);
    }

    return false;
  };

  return {
    storeUid,
    getUid,
  };
};

export default localStorageModule;