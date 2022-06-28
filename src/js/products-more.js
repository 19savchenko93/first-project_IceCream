(() => {
  const mobileMenu = document.querySelector('.js-menu-container-a');
  const openMenuBtn = document.querySelector('.js-open-menu-a');
  const closeMenuBtn = document.querySelector('.js-close-menu-a');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

(() => {
  const mobileMenu = document.querySelector('.js-menu-container-b');
  const openMenuBtn = document.querySelector('.js-open-menu-b');
  const closeMenuBtn = document.querySelector('.js-close-menu-b');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////

(() => {
  const mobileMenu = document.querySelector('.js-menu-container-c');
  const openMenuBtn = document.querySelector('.js-open-menu-c');
  const closeMenuBtn = document.querySelector('.js-close-menu-c');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
