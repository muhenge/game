import { displayInModal, cleanModal, TailwindButtonClass } from "./helper";
import apiModule from "./api";
import localStorageModule from "./local";
import { GAME_URI, SCORE_URI } from "./constants";

const domModule = () => {
  const api = apiModule();
  const local = localStorageModule();
  const clearContent = () => {
    const content = document.getElementById('content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

  const createElem = (elemName, classes = [], attrs = '', eventListner = null) => {
    const elem = document.createElement(elemName);
    if (classes.length > 0) {
      elem.classList.add(...classes);
    }

    if (attrs !== '') {
      if (typeof attrs === 'string') {
        attrs = { id: attrs };
      }

      Object.entries(attrs).forEach(a => {
        elem.setAttribute(a[0], a[1]);
      });
    }
    if (eventListner) {
      if (typeof eventListner === 'string') {
        elem.addEventListener('click', eventListner);
      } else {
        Object.entries(eventListner).forEach(a => {
          elem.addEventListener(a[0], a[1]);
        });
      }
    }
    return elem;
  };

  const addGame = async (event) => {
    event.preventDefault();

    const name = document.getElementById('gameName');
    if (name && name.value !== '') {
      Array.from(event.target.elements).forEach(
        formElement => formElement.disabled = true
      );

      let resp = await api.post(GAME_URI, { name: name.value });
      if (resp.result) {
        local.storeUid(resp.result.split(' ')[3]);
        cleanModal();
      }
      Array.from(event.target.elements).forEach(
        formElement => formElement.removeAttribute('disabled')
      );
    }
  };

  const addScore = async (event) => {
    event.preventDefault();
    

    const user = document.getElementById('player');
    const score = document.getElementById('score');

    if (user && score && user.value !== '' && score.value !== '') {
      Array.from(event.target.elements).forEach(
        formElement => formElement.disabled = true
      );

      const gameId = local.getUid();
      let resp = await api.post(`${GAME_URI}${gameId.uid}/${SCORE_URI}`, { score: score.value, user: user.value });
      if (resp.result) {
        cleanModal();
      }
      Array.from(event.target.elements).forEach(
        formElement => formElement.removeAttribute('disabled')
      );
    }
  };

  const createGame = () => {
    const card = createElem('form', ['p-4', 'm-4', 'w-full', 'flex', 'flex-col','justify-between'], { action: "" }, { 'submit': addGame });
    const gameName = createElem('input', ['px-4', 'py-2', 'mb-2', 'shadow-sm'], { type: 'text', id: 'gameName', placeholder: 'New Game Name' });
    const addBtn = createElem('input', [...TailwindButtonClass], { type: 'submit', value: 'Add Game' });
    card.appendChild(gameName);
    card.appendChild(addBtn);
    displayInModal(card);
  };

  const createScore = () => {
    const card = createElem('form', ['p-4', 'm-4', 'w-full', 'flex', 'flex-col', 'justify-between'], { action: "" }, { 'submit': addScore });
    const playerName = createElem('input', ['px-4', 'py-2', 'mb-2', 'shadow-sm'], { type: 'text', id: 'player', placeholder: 'Player name' });
    const gameScore = createElem('input', ['px-4', 'py-2', 'mb-2', 'shadow-sm'], { type: 'number', id: 'score', placeholder: 'Score' });
    const addBtn = createElem('input', [...TailwindButtonClass], { type: 'submit', value: 'Add Score' });
    card.appendChild(playerName);
    card.appendChild(gameScore);
    card.appendChild(addBtn);
    displayInModal(card);
  };

  return { createGame, createScore }
}
export { domModule as default };
