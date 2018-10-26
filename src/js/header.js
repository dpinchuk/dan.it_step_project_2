// document.addEventListener('click', function(e){
//     if (e.target.closest('.header__navbar-nav-button')) {
//         document.getElementsByClassName('header__navbar-nav')[0].classList.toggle('active')
//     }
// });

jQuery(document).ready(function($){
    $('.header__navbar-nav-button').show();
    $('.header__navbar-nav-menu').click(function(){$(this).next().toggle()});
});