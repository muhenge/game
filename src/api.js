const apiModule = () => {
  const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  };

  const get = async () => {
    const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QYuDjx47z1peVEbHaQg3/scores/');
    return req.json();
  };

  return { post, get }
}

export { apiModule as default }