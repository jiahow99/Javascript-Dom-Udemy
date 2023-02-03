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


///////////////////////////////////////
// Menu fade animation
$('.nav__item').mouseover(function (e) { 
  $('.nav__item, #logo').not($(this)).css('opacity', '0.5');
});

$('.nav__item').mouseout(function (e) { 
  $('.nav__item, #logo').css('opacity', '1.0');
});


///////////////////////////////////////
// Sticky navbar
const obsCallback = function(entries){
  entries.forEach(entries => {
    if(!entries.isIntersecting){
      console.log("not intersecting");
    }
  });
};

const obsOption = {
  root: null,
  threshold: 0,
};

const header = document.querySelector('.header');
const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(header)
