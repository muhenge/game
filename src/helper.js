const cleanModal = (id = 'modalStation') => {
  const modal = document.getElementById(id);
  while (modal.childElementCount > 0) {
    modal.removeChild(modal.firstElementChild);
  }
  return modal;
};

const cancelModal = (event) => {
  event.preventDefault();
  cleanModal();
};

const displayInModal = (innerContent) => {
  const template = document.getElementById('tmpl-modal');
  const modalTmpl = template.content.cloneNode(true);
  const workStation = modalTmpl.getElementById('working-station');
  const modalContainer = modalTmpl.getElementById('modalContainer');

  modalContainer.addEventListener('click', cancelModal);

  workStation.appendChild(innerContent);

  const modal = cleanModal();

  modal.appendChild(modalTmpl);
};

const createUL = (project) => {
  const ul = document.createElement('ul');
  ul.classList.add(
    'ml-4',
    'flex-row',
    'divide-y-2',
    'divide-indigo-400',
    'divide-dashed',
  );
  ul.setAttribute('id', project.projectId);

  return ul;
};

const TailwindButtonClass = 'inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-red sm:text-sm sm:leading-5'.split(
  ' ',
);

export {
  cancelModal,
  cleanModal,
  TailwindButtonClass,
  createUL,
  displayInModal,
};