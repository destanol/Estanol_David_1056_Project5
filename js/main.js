
var toggle = document.querySelector('#btnToggle');
var menu = document.querySelector('.menu');
var menuItem = document.querySelector('.menu');
// var navHeight = document.querySelector('.')1


function openNav() {
  menu.style.display = 'flex';
  toggleBtn.style.fill= 'navItem';
};

function closeNav() {
  menu.style.display = 'none';

};

function toggleNav() {
  if (menu.style.display === 'none')
    {openNav()
  } else
    {closeNav()
  }
}

toggle.addEventListener('click', toggleNav());

navItem.addEventListener('click'), toggleNav();