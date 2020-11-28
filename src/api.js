import { BASE_URL } from "./constants";
const apiModule = () => {
  const post = async (uri = '', data = {}) => {
    const response = await fetch(BASE_URL + uri, {
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

  const get = async (uri) => {
    const req = await fetch(BASE_URL + uri);
    return req.json();
  };

  return { post, get }
}

export { apiModule as default }