import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import apiModule from "./api";
import domModule from "./dom";

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const init = async () => {
  const api = apiModule();
  const dom = domModule();
  setInterval(() => {
    console.log('----------------------------')
    console.log(await api.get());
  }, 500);
  
};

document.getElementById('createGame').addEventListener('click', dom.createGame);
document.getElementById('createScore').addEventListener('click', dom.createScore);

init();