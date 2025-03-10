window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', Math.min(window.pageYOffset / (document.body.offsetHeight - window.innerHeight), 1));
  }, false);