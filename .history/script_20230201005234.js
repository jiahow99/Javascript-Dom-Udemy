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
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});

$('#operations').click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});

$('#testimonials').click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});


///////////////////////////////////////
// Tab clicking
const tabs = $('.operations__tab');
const tabsContainer = $('.operations__tab-container');
const tabsContent = $('.operations__content');

tabsContainer.click(function (e) { 
  const clicked = e.target.closest('.operations__tab');

  // Clicked null
  if (!clicked) return;
  
  // Active tab
  tabs.removeClass('operations__tab--active');
  $(clicked).addClass('operations__tab--active');
  
  // Show content
  const contentNumber = $(clicked).data('tab');
  $(tabsContent).removeClass('operations__content--active');
  $('.operations__content--'+contentNumber).addClass('operations__content--active');
});


// Menu fade animation
const nav = $('.nav');
nav.mouseover(function (e) { 
  const link = $(e.target);
  link.closest('.nav__item').siblings().animate({opacity: 0.5},);
});

nav.mouseout(function (e) { 
  $('.nav__item').animate({opacity: 1}, 200);
});
