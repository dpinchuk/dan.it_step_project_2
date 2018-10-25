document.addEventListener('click', function(e){
    if (e.target.closest('.header__navbar-nav-button')) {
        document.getElementsByClassName('header__navbar-nav')[0].classList.toggle('active')
    }
});