

const apiModule = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  async function postData(url = '', data = {}) {
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
  }

  async function getData() {
    const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QYuDjx47z1peVEbHaQg3/scores/');
    return req.json();
  }
  
  return { postData, getData }
}

export { apiModule as default }