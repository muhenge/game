import { displayInModal } from "./helper";
import apiModule  from "./api";
const domModule = () => {
  const api = apiModule();
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
      elem.addEventListener('click', eventListner);
    }
    return elem;
  };

  const addGame = (event) => {
    const name = document.getElementById('gameName').value;
    if (name !== '') {
      api.post({name});
    }
  }

  const addScore = (event) => {
    const user = document.getElementById('player').value;
    const score = document.getElementById('score').value;
    if (user !== '' && score !== '') {
      api.post({score, user});
    }
  }

  const createGame = () => {
    const card = createElem('div', ['p-4', 'm-4', 'flex', 'justify-between']);
    const gameName = createElem('input', [], {type: 'text', id: 'gameName', placeholder: 'New Game Name'});
    const addBtn = createElem('input', [], {type: 'button', value: 'Add Game'}, addGame);
    card.appendChild(gameName);
    card.appendChild(addBtn);
    displayInModal(card);
  };

  const createScore = () => {
    const card = createElem('div', ['p-4', 'm-4', 'flex', 'justify-between']);
    const gameName = createElem('input', [], {type: 'text', id: 'player', placeholder: 'Player name'});
    const gameName = createElem('input', [], {type: 'number', id: 'score', placeholder: 'Score'});
    const addBtn = createElem('input', [], {type: 'button', value: 'Add Score'}, addScore);
    card.appendChild(gameName);
    card.appendChild(addBtn);
    displayInModal(card);
  };

  return {createGame, createScore}
}
export { greetingModule as default };
