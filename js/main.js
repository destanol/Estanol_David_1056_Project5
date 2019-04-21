
var toggle = document.querySelector('#btnToggle');
var menu = document.querySelector('.menu');
var navItem = document.querySelectorAll('.navItem a');


function openNav() {
  menu.style.display = 'flex';
}

function closeNav() {
  menu.style.display = 'none';
}

function toggleNav() {
  if (menu.style.display === 'none')
    { openNav();
  } else
    { closeNav();
  }
}

toggle.addEventListener('click', toggleNav);

navItem.addEventListener('click', toggleNav);