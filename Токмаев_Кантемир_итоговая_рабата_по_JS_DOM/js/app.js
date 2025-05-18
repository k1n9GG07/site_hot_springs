window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`);
});