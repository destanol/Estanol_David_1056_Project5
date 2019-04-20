
var toggle = document.querySelector('#btnToggle');
var menu = document.querySelector('.menu');


function openNav() {
  menu.style.display = 'flex';
  // menu.style.position = 'sticky';

  // toggleBtn.style.fill= '';
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

toggle.addEventListener('click', toggleNav);