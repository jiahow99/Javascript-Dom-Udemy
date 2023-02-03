'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////////////////////
// Page scrolling
$('.learn-more, #features').click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(this.attr('href')).offset().top
  }, 500);
});

$('#operations').click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section--2').offset().top
  }, 500);
});

$('#testimonials').click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section--3').offset().top
  }, 500);
});


///////////////////////////////////////
// 