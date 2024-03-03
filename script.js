'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// we use the querySelectorAll if we are referencing a class in more than one place

const openModal = function () {
  modal.classList.remove('hidden'); // classList.remove - removes the other class, for removing multiple classes we write as comma-seperated values modal.classList.remove('hidden', 'class2');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden'); // classList.add - adds class
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  // happens for any keypress
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); //classList.contains - checks if the class exists
  }
});
