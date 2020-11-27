import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import apiModule from "./api";
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const init = () => {
  const api = apiModule();
  api.postData(url, { name: 'My cool new game two' })
  .then(data => {
      console.log(data);
  });

  api.getData()
  .then(data => {
      console.log(data);
  });
};

init();