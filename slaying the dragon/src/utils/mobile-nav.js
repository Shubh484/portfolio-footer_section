const mobileNav = () => {
  const headerbtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');

  headerbtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
  });

};

export default mobileNav;
