import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import apiModule from "./api";
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const init = async () => {
  const api = apiModule();
  console.log(await api.postData(url, { name: 'My cool new game two' }));
  console.log(await api.getData());
};

init();