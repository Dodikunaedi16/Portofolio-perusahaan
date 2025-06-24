const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    toggleBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');

    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('animate-slide-down');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('animate-slide-down');
    }
  });
